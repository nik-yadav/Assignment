/*  1  */
const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim","Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

const vowel_states = states.filter(check_vowel);
function check_vowel(state){
return (state[0] == 'A' || state[0] == 'E' || state[0] == 'I' || state[0] == 'O' || state[0] == 'U')

}
console.log(vowel_states)

/*  2  */
let str = 'I love my India'
let str1 = '';

function split(str){
	return str.split(' ').reverse().join(' ');
}
console.log(split(str));

/*  4  */
let constant = 0;
let vowel = 0;
let sentence = 'India is one of the most wonderful place to live in due to its various different climates.'
for(let i of sentence){
	if(i.toLowerCase() == 'a' || i.toLowerCase() == 'e' || i.toLowerCase() == 'i' || i.toLowerCase() == 'o' || i.toLowerCase() == 'u' ){
  		vowel+= 1;
  }else if(i.toLowerCase() >= 'b' && i.toLowerCase() <= 'z'){
  	constant+= 1;
  }
}
console.log(constant);
console.log(vowel);

/*  5  */
w_word = 'different'
c_word = 'multiple'
console.log(replace(sentence, w_word, c_word));
function replace (sentence, w_word, c_word){
	let str_split = sentence.split(' ');
  for(let i=0;i<str_split.length;i++){
  	if(str_split[i] == w_word){
			sentence = sentence.replace(w_word, c_word);
    }
  }
  return sentence;
}

/*  6  */
let inputArr = [1,2,3,9,10,7,5,4,3];
console.log(inputArr.filter(filler));
function filler(input){
	if(input >  5 ) return input;
}

/*  7  */
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
students.map((student) => {
	let total = student.scores.reduce(calculate_average, 0)
  student['average'] = total/student.scores.length;
  delete(student.scores)
  return student;
})

function calculate_average(total, currentValue){
	total += currentValue;
  return total;
}
console.log(students);

/*  8  */
let a = 456;
let sum = 0;
while(a > 0){

	sum = sum + (a%10);
	if(Math.floor(a/10) == 0){
  	a = sum;
    sum = 0;
	}
  else{
  a = Math.floor(a/10);
  }
}
console.log(sum);
