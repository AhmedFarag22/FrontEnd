//String
charAt(index) // → يجيب الحرف عند الـ index.

charCodeAt(index) // → يجيب الكود (Unicode) للحرف عند الـ index.

includes(substring) // → يتحقق هل string يحتوي على substring.

startsWith(substring) // → هل يبدأ بـ substring.

endsWith(substring) // → هل ينتهي بـ substring.

indexOf(substring) // → أول ظهور للـ substring.

lastIndexOf(substring) // → آخر ظهور للـ substring.

slice(start, end) // → يرجع جزء من string.

substring(start, end) // → شبه slice بس مابيقبلش negative index.

substr(start, length) // ❌ (قديمة – deprecated).

split(separator, limit) // → يقسم string إلى array.

replace(search, replacement) // → يستبدل أول occurrence.

replaceAll(search, replacement) // → يستبدل كل occurrences.

concat(str1, str2) // → يدمج strings.

trim() // → يشيل المسافات من البداية والنهاية.

trimStart() // أو trimLeft() → يشيل المسافات من البداية فقط.

trimEnd() // أو trimRight() → يشيل المسافات من النهاية فقط.

toUpperCase() // → يحول الحروف لكابيتال.

toLowerCase() // → يحول الحروف لسمول.

toLocaleUpperCase() // → uppercase حسب اللغة المحلية.

toLocaleLowerCase() // → lowercase حسب اللغة المحلية.

length // (خاصية مش function) → طول الـ string.

toString() // → يرجع القيمة كـ string.

valueOf() // → يرجع القيمة الأولية للـ string object.




//Array

push(element1, element2) // → يضيف عناصر في الآخر.

pop() // → يشيل آخر عنصر ويرجعه.

unshift(element1, element2) // → يضيف عناصر في الأول.

shift() // → يشيل أول عنصر ويرجعه.

slice(start, end) // → يرجع نسخة (copy) لجزء من الـ array

includes(value) // → هل العنصر موجود؟

indexOf(value) // → أول index للعنصر.

lastIndexOf(value) // → آخر index للعنصر.

find(callback) // → يرجع أول عنصر يحقق الشرط.

findIndex(callback) // → يرجع index لأول عنصر يحقق الشرط.

findLast(callback) // → يرجع آخر عنصر يحقق الشرط (ES2023).

findLastIndex(callback) // → يرجع index لآخر عنصر يحقق الشرط (ES2023).

some(callback) // → هل يوجد عنصر يحقق الشرط؟

every(callback) // → هل كل العناصر تحقق الشرط؟

filter(callback) // → يرجع array جديد بالعناصر اللي بتحقق الشرط.

map(callback) // → يرجع array جديد بعد تطبيق دالة على كل عنصر.

sort(compareFunction) // → يرتب العناصر.

reverse() // → يعكس الترتيب.

forEach(callback) // → ينفذ callback لكل عنصر.

// for 
let obj = { a: 1, b: 2, c: 3 }; // بيعدي على المفاتيح (keys) بتاعة object أو index بتاع array.
for (let key in obj) {
  console.log(key, obj[key]);
}


let arr = [10, 20, 30]; // بيعدي على القيم (values) مش الـ index.
for (let value of arr) {
  console.log(value);
}


// DOM

document.title // → عنوان الصفحة.

document.URL // → رابط الصفحة.

document.body // → عنصر الـ body.

document.head // → عنصر الـ head.

document.forms // → مجموعة النماذج <form>.

document.images // → كل الصور <img>.

document.links // → كل الروابط <a>.

document.scripts // → كل السكريبتات.

// بالid
let el = document.getElementById('myDiv');

// بالclass
let els = document.getElementsByClassName('myClass');

// بالtag
let tags = document.getElementsByTagName('p')[0];

// بالquerySelector (أحدث وأسهل)
let first = document.querySelector('.myClass');
let all = document.querySelectorAll('.myClass');  // NodeList


// innerHTML → محتوى العنصر HTML.

// innerText → النص اللي ظاهر فقط.

// textContent → النص كله حتى لو مخفي.

// className → اسم الكلاس.

// id → id العنصر.

// style → لتغيير CSS مباشرة.


el.style.color = 'red';

const box = document.getElementById("box");
box.classList.add("bold");  // يضيف كلاس جديد اسمه bold

setAttribute(attr, value) // → يغير attribute.

getAttribute(attr) // → يجيب قيمة attribute.

removeAttribute(attr) // → يشيل attribute.

appendChild(node) // → يضيف عنصر جديد.

removeChild(node) // → يشيل عنصر فرعي.

replaceChild(newNode, oldNode) // → يستبدل عنصر.


node.nodeType    // نوع النود (1=Element, 3=Text, 8=Comment)
node.nodeName    // اسم النود
node.childNodes  // كل النودز الفرعية
node.parentNode  // الأب مباشرة
node.firstChild  // أول عنصر فرعي
node.lastChild   // آخر عنصر فرعي



// click → عند الضغط على العنصر.

// mouseover, mouseout → عند المرور بالماوس.

// keydown, keyup → عند ضغط زر.

// submit → عند إرسال form.


let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    alert('Clicked!');
});




// parentNode → العنصر الأب.

// children → العناصر الأبناء مباشرة.

// firstElementChild → أول عنصر فرعي.

// lastElementChild → آخر عنصر فرعي.

// nextElementSibling → العنصر التالي في نفس المستوى.

// previousElementSibling → العنصر السابق في نفس المستوى.


let div = document.createElement('div');
div.textContent = 'Hello';
document.body.appendChild(div);  // ضيفناه للbody

div.remove();  // حذف العنصر


document.body.addEventListener('click', function(e) {
    if(e.target.classList.contains('btn')){
        console.log('Button clicked!');
    }
});




div.onclick(
    function(e) {
    if(e.target.classList.contains('btn')){
        console.log('Button clicked!');
    }
}
)


// children → عناصر HTML فقط (Element nodes).

// childNodes → كل حاجة (Elements + Text + Comments).

// innerHTML → بيرجع/يعدل الـ HTML نفسه (بالتاجات).

// innerText → بيرجع/يعدل النص المرئي فقط بعد تطبيق الـ CSS.

// textContent → بيرجع/يعدل كل النصوص سواء ظاهرة أو مخفية.



// generator function


function* ask() {
  const a = yield 'give me a';   // <-- أول yield يخرج 'give me a'
  console.log('got a =', a);     // بعد ما ندّي قيمة عبر next(value) هتطبع هنا
  const b = yield 'give me b';
  return a + b;
}

const it = ask();
console.log(it.next());       // {value: 'give me a', done:false}
console.log(it.next(10));     // نرسل 10 => يطبع "got a = 10" ثم {value:'give me b', done:false}
console.log(it.next(20));     // نرسل 20 => يرجع {value:30, done:true}


// Generator function to produce a range of numbers
function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// Example usage
for (const num of range(1, 10, 2)) {
  console.log(num);
}

function commonElements(arr1, arr2) {
  // نحول واحدة منهم Set علشان البحث يبقى سريع
  const set2 = new Set(arr2);
  // نفلتر عناصر arr1 لو موجودة في set2
  const result = arr1.filter(item => set2.has(item));
  // نحولها Set تاني علشان نشيل التكرارات
  return [...new Set(result)];
}

// Example usage
console.log(commonElements([1, 2, 2, 3, 4], [2, 2, 3, 5])); 
// Output: [2, 3]



function* fibonacci(limit) {
  let a = 0, b = 1;

  while (a <= limit) {
    yield a;
    [a, b] = [b, a + b]; // نحدث الأرقام
  }
}

// Example usage
for (const num of fibonacci(50)) {
  console.log(num);
}



const obj = {
  a: 1,
  b: 2,
  c: 3,

  // نضيف Symbol.iterator كـ generator function
  *[Symbol.iterator]() {
    for (const key of Object.keys(this)) {
      yield [key, this[key]];
    }
  }
};

for (const [key, value] of obj) {
  console.log(key, value);
}
// الناتج:
// a 1
// b 2
// c 3



// Generator للأعداد الزوجية
function* evenNumbers(limit) {
  let n = 0;
  while (n <= limit) {
    yield n;
    n += 2;
  }
}

// Generator للأعداد الفردية
function* oddNumbers(limit) {
  let n = 1;
  while (n <= limit) {
    yield n;
    n += 2;
  }
}

// Generator رئيسي بيستخدم delegation
function* combined(limit) {
  yield* evenNumbers(limit); // يدي الدور للـ even
  yield* oddNumbers(limit);  // بعد كده يدي الدور للـ odd
}

// Example usage
for (const num of combined(10)) {
  console.log(num);
}







// Generator للأحرف
function* letterGenerator() {
  yield* ["A", "B", "C", "D"];
}

// Generator للأرقام
function* numberGenerator() {
  yield* [1, 2, 3, 4];
}

// Generator بيفوض الاتنين
function* combinedGenerator() {
  yield* letterGenerator();  // الأول الحروف
  yield* numberGenerator();  // بعدين الأرقام
}

// تجربة
for (let value of combinedGenerator()) {
  console.log(value);
}
