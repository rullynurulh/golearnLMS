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
        return view('/admin/quiz/admin-add-quiz-question', ['questions' => $questions]);
    }
}
