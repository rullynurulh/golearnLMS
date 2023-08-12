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
        $questions = Question::where(['quiz' => $id])->get();
        return view('/admin/quiz/admin-add-quiz-question', ['questions' => $questions, 'id' => $id]);
    }

    public function addQuestion(Request $request)
    {

        $question = new Question;
        $question->question = $request->question;
        $question->type = $request->type;
        $question->quiz = $request->quiz;

        if ($request->hasFile('file')) {

            $data = $request->validate([
                'file' => 'max:2048'
            ]);


            $file_name = uniqid() . '.' . $data['file']->getClientOriginalExtension();
            $file_path = 'question-file/' . $file_name;
            $request->file->move(public_path('question-file'), $file_name);

            $question->file = $file_path;
        }


        if ($request->type == 'multiple choice') {

            $request->validate([
                'answer_multiple_choice' => 'required'
            ]);

            $question->answer = $request->answer_multiple_choice;


            if ($request->filled('option_a')) {
                $question->option_a = $request->option_a;
            }

            if ($request->filled('option_b')) {
                $question->option_b = $request->option_b;
            }

            if ($request->filled('option_c')) {
                $question->option_c = $request->option_c;
            }
            if ($request->filled('option_d')) {
                $question->option_d = $request->option_d;
            }
        } else {

            $request->validate([
                'answer_long_answer' => 'required'
            ]);

            $question->answer = $request->answer_long_answer;
        }


        $question->save();


        return back();
    }

    public function deleteQuestion($id)
    {
        Question::whereId($id)->delete();
        return back();
    }

    public function updateQuizStatus(Request $request)
    {
        Quiz::whereId($request->id)->update([
            'status' => $request->status
        ]);

        return redirect('/admin/add-quiz');
    }
}
