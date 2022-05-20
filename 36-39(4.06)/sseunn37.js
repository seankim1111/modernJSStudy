//[예제풀이 13 -01]
const set = new Set();
console.log(set); //Set(0) {}

//[예제풀이 37-02]
const set1 = new Set([1, 2, 3, 3]);
console.log(set1); //Set(3) {1, 2, 3}
const set2 = new Set('hello');
console.log(set2); //Set(4) {"h", "e", "l", "o"}

//[예제풀이 37-03]
//배열의 중복 요소 제거
const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); //[2, 1, 3, 4]
//Set을 사용한 배열의 중복 요소 제거
const uniq = array => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); //[2, 1, 3, 4]

//[예제풀이 37-04]
const { size } = new Set([1, 2, 3, 3]);
console.log(size); //3

//[예제풀이 37-05]
const set = new Set([1, 2, 3]);
console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));
//{set: undefined, enumerable: false, configurable: true, get: ƒ}

set.size = 10; //무시된다.
console.log(set.size); //3

//[예제풀이 37-06]
const set = new Set();
console.log(set); //Set(0) {}
set.add(1);
console.log(set); //Set(1) {1}

//[예제풀이 37-07]
const set = new Set();
set.add(1).add(2);
console.log(set); //Set(2) {1, 2}

//[예제풀이 37-08]
const set = new Set();
set.add(1).add(2).add(2);
console.log(set); //Set(2){1, 2}

//[예제풀이 37-09]
const set = new Set();
console.log(NaN === NaN); //false
console.log(0 === -0); //true
//NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
set.add(NaN).add(NaN);
console.log(set); //Set(1){NaN}
//+0과 -0을 같다고 평가하여 중복 추가를 허용하지 않는다.
set.add(0).add(-0);
console.log(set); //set(2){NaN, 0}

//[예제풀이 37-10]
const set = new Set();
set
  .add(1)
  .add('a')
  .add(true)
  .add(undefined)
  .add(null)
  .add({})
  .add([]);
console.log(set); // Set(7) {1, "a", true, undefined, null, {}, []}

//[예제풀이 37-11]
const set = new Set([1, 2, 3]);
console.log(set.has(2)); //true
console.log(set.has(4)); //false

//[예제풀이 37-12]
const set = new Set([1, 2, 3]);
//요소 2를 삭제한다.
set.delete(2);
console.log(set); //Set(2) {1, 3}
//요소 1을 삭제한다.
set.delete(1);
console.log(set); //Set(1) {3}

//[예제풀이 37-13]
const set = new Set([1, 2, 3]);
//존재하지 않는 요소 0을 삭제하면 에러없이 무시된다.
set.delete(0);
console.log(set); //Set(3) {1, 2, 3}

//[예제풀이 37-14]
const set = new Set([1, 2, 3]);
//delete는 불리언 값을 반환한다.
set.delete(1).delete(2); //TypeError: set.delete(...).delete is not a function

//[예제풀이 37-15]
const set = new Set([1, 2, 3]);
set.clear();
console.log(set); //Set(0) {}

//[예제풀이 37-16]
const set = new Set([1, 2, 3]);
set.forEach((v, v2, set) => console.log(v, v2, set));
1 1 Set(3) {1, 2, 3}
2 2 Set(3) {1, 2, 3}
3 3 Set(3) {1, 2, 3}

//[예제풀이 37-17]
const set = new Set([1, 2, 3]);
//Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in set); //true
//이터러블인 Set 객체는 for...of 문으로 순회할 수 있다.
for (const value of set) {
  console.log(value); //1 2 3
}
//이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...set]); //[1, 2, 3]
//이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a, ...rest] = [...set];
console.log(a, rest); //1, [2, 3]

//[예제풀이 37-18]
Set.prototype.intersection = function (set) {
  const result = new Set();
  for (const value of set) {
    //2개의 set의 요소가 공통되는 요소이면 교집합의 대상이다.
    if (this.has(value)) result.add(value);
  }
  return result;
};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
//setA와 setB의 교집합
console.log(setA.intersection(setB)); //Set(2) {2, 4}
//setB와 setA의 교집합
console.log(setB.intersection(setA)); //Set(2) {2, 4}

//[예제풀이 37-19]
Set.prototype.intersection = function (set) {
  return new Set([...this].filter(v => set.has(v)));
};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
//setA와 setB의 교집합
console.log(setA.intersection(setB)); //Set(2) {2, 4}
// setB와 setA의 교집합
console.log(setB.intersection(setA)); //Set(2) {2, 4}

//[예제풀이 37-20]
Set.prototype.union = function (set) {
  //this(Set 객체)를 복사
  const result = new Set(this);
  for (const value of set) {
    //합집합은 2개의 Set 객체의 모든 요소로 구성된 집합이다. 중복된 요소는 포함되지 않는다.
    result.add(value);
  }
  return result;
};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
//setA와 setB의 합집합
console.log(setA.union(setB)); //Set(4) {1, 2, 3, 4}
// setB와 setA의 합집합
console.log(setB.union(setA)); //Set(4) {2, 4, 1, 3}

//[예제풀이 37-21]
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
//setA와 setB의 합집합
console.log(setA.union(setB)); //Set(4) {1, 2, 3, 4}
// setB와 setA의 합집합
console.log(setB.union(setA)); //Set(4) {2, 4, 1, 3}

//[예제풀이 37-22]
Set.prototype.difference = function (set) {
//this(Set 객체)를 복사
const result = new Set(this);
for (const value of set) {
//차집합은 어느 한쪽 집합에는 존재하지만 다른 한쪽 집합에는 존재하지 않는 요소로 구성된 집합이다.
result.delete(value);
}
return result;
};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
//setA에 대한 setB의 차집합
console.log(setA.difference(setB)); //Set(2) {1, 3}
//setB에 대한 setA의 차집합
console.log(setB.difference(setA)); //Set(0) {}

//[예제풀이 37-23]
Set.prototype.difference = function (set) {
  return new Set([...this].filter(v => !set.has(v)));
};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
//setA에 대한 setB의 차집합
console.log(setA.difference(setB)); //Set(2) {1, 3}
//setB에 대한 setA의 차집합
console.log(setB.difference(setA)); //Set(0) {}

//[예제풀이 37-24]
//this가 subset의 상위 집합인지 확인한다.
Set.prototype.isSuperset = function (subset) {
for (const value of subset) {
//superset의 모든 요소가 subset의 모든 요소를 포함하는지 확인
if (!this.has(value)) return false;
}
return true;
};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
//setA가 setB의 상위 집합인지 확인한다.
console.log(setA.isSuperset(setB)); //true
//setB가 setA의 상위 집합인지 확인한다.
console.log(setB.isSuperset(setA)); //false

//[예제풀이 37-25]
//this가 subset의 상위 집합인지 확인한다.
Set.prototype.isSuperset = function (subset) {
  const supersetArr = [...this];
  return [...subset].every(v => supersetArr.includes(v));
};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
//setA가 setB의 상위 집합인지 확인한다.
console.log(setA.isSuperset(setB)); //true
// setB가 setA의 상위 집합인지 확인한다.
console.log(setB.isSuperset(setA)); //false

//[예제풀이 37-26]
const map = new Map();
console.log(map); //Map(0) {}

//[예제풀이 37-27]
const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map1); //Map(2) {"key1" => "value1", "key2" => "value2"}
const map2 = new Map([1, 2]); //TypeError:Iterator value 1 is not an entry object

//[예제풀이 37-28]
const map = new Map([['key1', 'value1'], ['key1', 'value2']]);
console.log(map); //Map(1) {"key1" => "value2"}

//[예제풀이 37-29]
const { size } = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(size); //2

//[예제풀이 37-30]
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));
//{set: undefined, enumerable: false, configurable: true, get: ƒ}
map.size = 10; // 무시된다.
console.log(map.size); //2

//[예제풀이 37-31]
const map = new Map();
console.log(map); //Map(0) {}
map.set('key1', 'value1');
console.log(map); //Map(1) {"key1" => "value1"}

//[예제풀이 37-32]
const map = new Map();
map
  .set('key1', 'value1')
  .set('key2', 'value2');
console.log(map); // Map(2) {"key1" => "value1", "key2" => "value2"}

//[예제풀이 37-33]
const map = new Map();
map
  .set('key1', 'value1')
  .set('key1', 'value2');
console.log(map); //Map(1) {"key1" => "value2"}

//[예제풀이 37-34]
const map = new Map();
console.log(NaN === NaN); //false
console.log(0 === -0); //true
//NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
map.set(NaN, 'value1').set(NaN, 'value2');
console.log(map); //Map(1) { NaN => 'value2'}
//+0과 -0을 같다고 평가하여 중복 추가를 허용하지 않는다.
map.set(0, 'value1').set(-0, 'value2');
console.log(map); //Map(2) { NaN => 'value2', 0 => 'value2' }

//[예제풀이 37-35]
const map = new Map();
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
//객체도 키로 사용할 수 있다.
map
.set(lee, 'developer')
.set(kim, 'designer');
console.log(map);
//Map(2) { {name: "Lee"} => "developer", {name: "Kim"} => "designer" }

//[예제풀이 37-36]
const map = new Map();
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
map
.set(lee, 'developer')
.set(kim, 'designer');
console.log(map.get(lee)); // developer
console.log(map.get('key')); // undefined

//[예제풀이 37-37
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const map = new Map([[lee, 'developer'], [kim, 'designer']]);
console.log(map.has(lee)); //true
console.log(map.has('key')); //false

//[예제풀이 37-38]
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const map = new Map([[lee, 'developer'], [kim, 'designer']]);
map.delete(kim);
console.log(map); //Map(1) { {name: "Lee"} => "developer" }

//[예제풀이 37-39]
const map = new Map([['key1', 'value1']]);
// 존재하지 않는 키 'key2'로 요소를 삭제하려 하면 에러없이 무시된다.
map.delete('key2');
console.log(map); // Map(1) {"key1" => "value1"}

//[예제풀이 37-40]
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const map =new Map([[lee, 'developer'], [kim, 'designer']]);
map.delete(lee).delete(kim); //TypeError: map.delete(...).delete is not a function

//[예제풀이 37-41]
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const map = new Map([[lee, 'developer'], [kim, 'designer']]);
map.clear();
console.log(map); // Map(0) {}

//[예제풀이 37-42]
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const map = new Map([[lee, 'developer'], [kim, 'designer']]);
map.forEach((v, k, map) => console.log(v, k, map));

developer {name: "Lee"} Map(2) {
  {name: "Lee"} => "developer",
  {name: "Kim"} => "designer"
}
designer {name: "Kim"} Map(2) {
  {name: "Lee"} => "developer",
  {name: "Kim"} => "designer"
}

//[예제풀이 37-43]
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const map = new Map([[lee, 'developer'], [kim, 'designer']]);
// Map 객체는 Map.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in map); // true
// 이터러블인 Map 객체는 for...of 문으로 순회할 수 있다.
for (const entry of map) {
  console.log(entry); //[{name: "Lee"}, "developer"][{name: "Kim"}, "designer"]
}
// 이터러블인 Map 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...map]);
// [[{name: "Lee"}, "developer"], [{name: "Kim"}, "designer"]]
// 이터러블인 Map 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a, b] = map;
console.log(a, b); //[{name: "Lee"}, "developer"][{name: "Kim"}, "designer"]

//[예제풀이 37-44]
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const map = new Map([[lee, 'developer'], [kim, 'designer']]);
//Map.prototype.keys는 Map 객체에서 요소키를 값으로 갖는 이터레이터를 반환한다.
for (const key of map.keys()) {
console.log(key); //{name: "Lee"} {name: "Kim"}
}
//Map.prototype.values는 Map 객체에서 요소값을 값으로 갖는 이터레이터를 반환한다.
for (const value of map.values()) {
console.log(value); //developer designer
}
//Map.prototype.entries는 Map 객체에서 요소키와 요소값을 값으로 갖는 이터레이터를 반환한다.
for (const entry of map.entries()) {
console.log(entry); // [{name: "Lee"}, "developer"]  [{name: "Kim"}, "designer"]
}