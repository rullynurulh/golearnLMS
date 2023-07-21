<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

    function addQuiz(Request $request)
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
                'status' => 'Draft',
            ]);
        }


        return back();
    }

    public function deleteQuiz($id)
    {
        Quiz::whereId($id)->delete();
        return back();
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
                'file' => 'mimes:csv,txt,xlx,xls,pdf|max:2048'
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
            if ($request->filled('option_')) {
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
