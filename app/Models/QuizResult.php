<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizResult extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    protected $fillable = [
        'enrolled',
        'quiz',
        'correct_answer',
        'wrong_answer',
        'total_question',
        'duration'

    ];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function enrolled()
    {
        return $this->belongsTo(Enrolled::class);
    }
}
