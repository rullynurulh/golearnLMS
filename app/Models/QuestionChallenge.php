<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionChallenge extends Model
{
    use HasFactory;

    protected $fillable = [
        'challenge_id',
        'question',
        'answer',
        'type',
        'file'
    ];

    public function challenge()
    {
        return $this->belongsTo(Challenge::class);
    }
}
