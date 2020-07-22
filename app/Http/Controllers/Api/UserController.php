<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class UserController extends Controller
{

    public function login(Request $request)
    {
        $credentials =$request->only('email', 'password');
        
        if(Auth::attempt($credentials)){
            $token = Str::random(80);
            Auth::user()->api_token = $token;
            Auth::user()->save();
            return response()->json(['token' => $token], 200);
        }
        return response()->json(['status' => 'Email or Password Invalid'], 403);
    }

    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
