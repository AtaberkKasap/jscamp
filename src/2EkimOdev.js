/* 
1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5) ✔✔

2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google) ✔✔

3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız. ✔✔

4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız. ✔✔
*/


function findPrime(...numbers){
	let primeNumbers = [];
	if (numbers.length > 1){
		numbers.forEach(num => {
			if (num == 1){
				primeNumbers.push(num);
			}
			else{
				let isPrime = true;
				for (let i = 2; i < num; i++) {
					if (num % i == 0){
						isPrime = false;
						break
					}
				}
				if (isPrime) {
					primeNumbers.push(num);
				}
			}
		})
	}
	return primeNumbers;
}
console.log(findPrime(2, 5));

/////////////////////////////////////////

function getSumOfDivisors(num){
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i == 0){
			sum += i;
		}
	}
	return sum;
}

function checkIfFriendNumbers(num1, num2){
	if ((getSumOfDivisors(num1) == num2) && (getSumOfDivisors(num2) == num1)){
		return true;
	}
	return false;
}
console.log(checkIfFriendNumbers(220, 284) ? "Girilen iki sayı arkadaş sayıdır." : "Girilen iki sayı arkadaş sayı değildir.");

/////////////////////////////////////////

function isNumberPerfect(number){
	let sum = 0;
	for (let i = 1; i < number; i++) {
		if (number % i == 0){
			sum += i;
		}
	}
	if (sum == number){
		return true;
	}
}

function getPerfectNumbers(limit){
	let perfectNumbers = [];
	for (let i = 1; i < limit; i++) {
		if (isNumberPerfect(i)){
			perfectNumbers.push(i);
		}
	}
	return perfectNumbers;
}
console.log(getPerfectNumbers(1000));

/////////////////////////////////////////

console.log(findPrime(...[...Array(1001).keys()].splice(1)));