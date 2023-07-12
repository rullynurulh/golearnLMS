<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class StudentController extends Controller
{


    public function getProfile()
    {
        $paket_aktif = User::where(['id_user' => Auth()->user()->id])->get();
    }
}
