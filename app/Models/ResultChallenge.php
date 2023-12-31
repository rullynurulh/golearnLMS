<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultChallenge extends Model
{
    use HasFactory;

    protected $fillable = [
        'challenge_id',
        'user_id',
        'score',
        'time',
    ];

    public function challenge()
    {
        return $this->belongsTo(Challenge::class);
    }
}
