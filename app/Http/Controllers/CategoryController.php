<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getListCategories()
    {
        $categories = Category::all();

        $categoriesById = [];
        foreach ($categories as $s) {
            $categoriesById[$s['id']] = $s;
        }

        return view('/admin/courses/admin-categories', ['categories' => $categories, 'categoriesById' => $categoriesById]);
    }

    public function addCategory(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'status' => 'required',
        ]);

        $isAvailable = Category::where(['id' => $request->id])->count();
        if ($isAvailable == 0) {
            $category = new Category;
        } else {
            $category = Category::find($request->id);
        }
        $category->name = $request->name;
        $category->status = $request->status;

        if ($request->hasFile('image')) {

            $data = $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg'
            ]);

            if ($isAvailable > 0) {
                $data_user = Category::where(['id' => $request->id])->first();
                if (!is_null($data_user['image'])) {
                    unlink($data_user['image']);
                }
            }

            $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
            $image_path = 'images/category-image/' . $image_name;
            $request->image->move(public_path('images/1category-image'), $image_name);

            $category->image = $image_path;
        }

        if ($isAvailable > 0) {

            $category->update();
        } else {

            $category->save();
        }

        return back();
    }

    function deleteCategory($id)
    {
        Category::whereId($id)->delete();
        return back();
    }
}
