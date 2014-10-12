(function() {
	'use strict';
	var $asm = {};
	global.ClassLibrary1 = global.ClassLibrary1 || {};
	ss.initAssembly($asm, 'ClassLibrary1');
	////////////////////////////////////////////////////////////////////////////////
	// ClassLibrary1.Class1
	var $ClassLibrary1_Class1 = function() {
		this.a = 0;
	};
	$ClassLibrary1_Class1.__typeName = 'ClassLibrary1.Class1';
	$ClassLibrary1_Class1.hello = function() {
		$ClassLibrary1_Class1.$method(55);
		$ClassLibrary1_Class2.method(5);
		$ClassLibrary1_Class3.method(1);
	};
	$ClassLibrary1_Class1.$method = function(b) {
		var a = 53;
		a = a * b;
		a = ss.Int32.div(a, 50);
		a = ss.Int32.div(a, 50);
		a = ss.Int32.div(a, 50);
		return a;
	};
	global.ClassLibrary1.Class1 = $ClassLibrary1_Class1;
	////////////////////////////////////////////////////////////////////////////////
	// ClassLibrary1.Class2
	var $ClassLibrary1_Class2 = function() {
	};
	$ClassLibrary1_Class2.__typeName = 'ClassLibrary1.Class2';
	$ClassLibrary1_Class2.method = function(b) {
		var a = 5;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		var c = a;
	};
	global.ClassLibrary1.Class2 = $ClassLibrary1_Class2;
	////////////////////////////////////////////////////////////////////////////////
	// ClassLibrary1.Class3
	var $ClassLibrary1_Class3 = function() {
	};
	$ClassLibrary1_Class3.__typeName = 'ClassLibrary1.Class3';
	$ClassLibrary1_Class3.method = function(b) {
		var a = 5;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		a = a + b;
		var c = a;
	};
	global.ClassLibrary1.Class3 = $ClassLibrary1_Class3;
	ss.initClass($ClassLibrary1_Class1, $asm, {
		x: function() {
			$ClassLibrary1_Class1.$method(this.a);
		}
	});
	ss.initClass($ClassLibrary1_Class2, $asm, {});
	ss.initClass($ClassLibrary1_Class3, $asm, {});
})();

//# sourceMappingURL=ClassLibrary1.js.map
