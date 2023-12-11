<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\QuizHelpMode;

class QuizController extends Controller
{
    public function getAddQuiz()
    {
        $quizzes = Quiz::all();

        $quizzesById = [];
        foreach ($quizzes as $quiz) {
            $quizzesById[$quiz['id']] = $quiz;
        }
        return view('/admin/quiz/admin-add-quiz', ['quizzes' => $quizzes, 'quizzesById' => $quizzesById]);
    }

    public function addQuiz(Request $request)
    {


        if ($request->id == -1) {

            $request->validate([
                'title' => 'unique:quizzes',
            ]);
            Quiz::create([
                'title' => $request->title,
                'duration' => $request->duration,
                'min_percentage' => $request->min_percentage,
                'help_mode' => $request->help_mode,
                'status' => 'Draft',

            ]);
        } else {

            Quiz::whereId($request->id)->update([
                'title' => $request->title,
                'duration' => $request->duration,
                'min_percentage' => $request->min_percentage,
                'help_mode' => $request->help_mode,
                'status' => 'draft',
            ]);
        }


        return back();
    }

    public function deleteQuiz($id)
    {
        Quiz::whereId($id)->delete();
        return back();
    }

    public function getQuizSetting()
    {
        $quiz = QuizHelpMode::first();
        return view('/admin/quiz/admin-quiz-setting', ['quiz' => $quiz]);
    }

    public function saveQuizSetting(Request $request)
    {

        $quiz = QuizHelpMode::first();
        if ($quiz) {
            QuizHelpMode::whereId($quiz->id)->update([
                'max_help_mode' => $request->max_help_mode
            ]);
        } else {
            QuizHelpMode::create([
                'max_help_mode' => $request->max_help_mode
            ]);
        }


        return back();
    }

    public function getQuizResult($id)
    {
        $enrolleds = DB::table('quiz_results')
            ->join('enrolleds', 'quiz_results.enrolled', '=', 'enrolleds.id')
            ->join('users', 'users.id', '=', 'enrolleds.student')
            ->where(['quiz_results.quiz' => $id])
            ->select('users.name as student_name', 'quiz_results.*')
            ->orderBy('quiz_results.id', 'asc')
            ->get();
        $enrolleds = json_decode(json_encode($enrolleds), true);
        $quiz = Quiz::whereId($id)->first();
        return view('/admin/quiz/admin-result-quiz', ['enrolleds' => $enrolleds, 'quiz' => $quiz]);
    }

    public function getAddQuestion($id)
    {
        try {
            // where response null return []

            $question = Question::where('quiz', $id)
                ->get()->map(function ($item) {
                    $item->answer = json_decode($item->answer);
                    return $item;
                });

            if ($question->isEmpty()) {
                return response()->json([
                    'question' => []
                ]);
            }

            return response()->json([
                'question' => $question
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Terjadi kesalahan',
                'error' => $e->getMessage()
            ]);
        }
    }

    public function addQuestion(Request $request, $quiz)
    {
        try {
            $question = Question::create([
                'quiz' => $quiz,
                'question' => $request->question,
                'answer' => $request->answer,
                'type' => $request->typeAnswer,
                'file' => $this->uploadAndRenameFile($request->file)
            ]);

            return response()->json([
                'question' => $question,
                'message' => 'Question berhasil dibuat'
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Terjadi kesalahan',
                'error' => $e->getMessage()
            ]);
        }
    }

    public function uploadAndRenameFile($file)
    {
        if ($file) {
            $currentFile = storage_path('app/public/photo/' . $file);
            if (file_exists($currentFile)) {
                @unlink($currentFile);
            }

            $uploadedFile = $file;
            $name = time() . 'quiz.' . $file->getClientOriginalExtension();
            $uploadedFile->move(storage_path('app/public/photo'), $name);

            return $name;
        }

        return null;
    }

    public function deleteQuestion($id)
    {
        try {
            $question = Question::find($id);
            // when file not null
            if ($question->file) {
                $currentFile = storage_path('app/public/photo/' . $question->file);
                if (file_exists($currentFile)) {
                    @unlink($currentFile);
                }
            }

            $question->delete();

            return response()->json([
                'message' => 'Question berhasil dihapus'
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Terjadi kesalahan',
                'error' => $e->getMessage()
            ]);
        }
    }

    public function updateQuizStatus(Request $request)
    {
        Quiz::whereId($request->id)->update([
            'status' => $request->status
        ]);

        return redirect('/admin/add-quiz');
    }
}
