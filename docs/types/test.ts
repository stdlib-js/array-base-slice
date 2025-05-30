/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import BooleanArray = require( '@stdlib/array-bool' );
import slice = require( './index' );


// TESTS //

// The function returns an array...
{
	slice( [ 1, 2, 3 ], 0, 3 ); // $ExpectType number[]
	slice( new Float64Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Float64Array
	slice( new Float32Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Float32Array
	slice( new Int32Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Int32Array
	slice( new Int16Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Int16Array
	slice( new Int8Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Int8Array
	slice( new Uint32Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Uint32Array
	slice( new Uint16Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Uint16Array
	slice( new Uint8Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Uint8Array
	slice( new Uint8ClampedArray( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType Uint8ClampedArray
	slice( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3 ); // $ExpectType Complex128Array
	slice( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3 ); // $ExpectType Complex64Array
	slice( new BooleanArray( [ true, false, true, false ] ), 0, 3 ); // $ExpectType BooleanArray
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	slice( 5, 0, 3 ); // $ExpectError
	slice( true, 0, 3 ); // $ExpectError
	slice( false, 0, 3 ); // $ExpectError
	slice( null, 0, 3 ); // $ExpectError
	slice( void 0, 0, 3 ); // $ExpectError
	slice( {}, 0, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	slice( x, '5', 3 ); // $ExpectError
	slice( x, true, 3 ); // $ExpectError
	slice( x, false, 3 ); // $ExpectError
	slice( x, null, 3 ); // $ExpectError
	slice( x, void 0, 3 ); // $ExpectError
	slice( x, {}, 3 ); // $ExpectError
	slice( x, ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	slice( x, 0, '5' ); // $ExpectError
	slice( x, 0, true ); // $ExpectError
	slice( x, 0, false ); // $ExpectError
	slice( x, 0, null ); // $ExpectError
	slice( x, 0, void 0 ); // $ExpectError
	slice( x, 0, {} ); // $ExpectError
	slice( x, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	slice(); // $ExpectError
	slice( [ 1, 2, 3 ] ); // $ExpectError
	slice( [ 1, 2, 3 ], 0 ); // $ExpectError
	slice( [ 1, 2, 3 ], 0, 3, {} ); // $ExpectError
}
