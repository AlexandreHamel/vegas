<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Place;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $place = Place::all();

        return response()->json($place);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'namePlace' => 'required|max:190',
            'address' => 'required|max:190',
            'latitude' => 'required',
            'longitude' => 'required',
            'description' => 'required',
            'extras' => 'required',
        ]);

        $filename = "";
        if ($request->hasFile('picture')) {
            $filenameWithExt = $request->file('picture')->getClientOriginalName();
            $filenameWithoutExt = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('picture')->getClientOriginalExtension();
            $filename = $filenameWithoutExt . '_' . time() . '.' . $extension;
            $path = $request->file('picture')->storeAs('public/uploads', $filename);
        } else {
            $filename = Null;
        }

        $place = Place::create(array_merge($request->all(), ['picture' => $filename]));

        return response()->json([
            'status' => 'Success',
            'message' => 'Place created successfully',
            'data' => $place,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Place $place)
    {
        return response()->json($place);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Place $place)
    {
        $request->validate([
            'namePlace' => 'required',
            'address' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
            'description' => 'required',
            'extras' => 'required',
        ]);

        $filename = "";
        if ($request->hasFile('picture')) {

            if ($place->picture) {
                Storage::delete('public/uploads/' . $place->picture);
            }

            $filenameWithExt = $request->file('picture')->getClientOriginalName();
            $filenameWithoutExt = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('picture')->getClientOriginalExtension();
            $filename = $filenameWithoutExt . '_' . time() . '.' . $extension;
            $path = $request->file('picture')->storeAs('public/uploads', $filename);
        } else {
            $filename = Null;
        }

        $place->update(array_merge($request->all(), ['picture' => $filename]));

        return response()->json([
            'status' => 'Success',
            'message' => 'Place updated successfully',
            'data' => $place,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Place $place)
    {
        $place->delete();

        return response()->json([
            'status' => 'Success',
            'message' => 'Place deleted successfully',
        ]);
    }
}
