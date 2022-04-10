// 37장 Set과 Map
// 37.1 Set
// ____37.1.1 Set 객체의 생성
// Set 객체는 중복되지 않는 유일한 값들의 집합 이다. 배열과 유사하다.
// 37-01
const set = new Set();
console.log(set); // Set(0) {}

// 37-02
const set1 = new Set([1, 2, 3, 3]);
console.log(set1); // Set(3) {1, 2, 3}

const set2 = new Set("hello");
console.log(set2); // Set(4) {"h", "e", "l", "o"}

// 37-03
//
const uniq = (array) => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2, 1, 3, 4]

const uniq = (array) => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [2, 1, 3, 4]

// ____37.1.2 요소 개수 확인
// 37-04
const { size } = new Set([1, 2, 3, 3]);
console.log(size); // 3

// 37-05
const set = new Set([1, 2, 3]);

console.log(Object.getOwnPropertyDescriptor(Set.prototype, "size"));
// {
//   get: ƒ get size(),
//   set: undefined,
//   enumerable: false,
//   configurable: true
// }

set.size = 10; // 무시된다.
console.log(set.size);

// ____37.1.3 요소 추가
// 37-06
const set = new Set();
console.log(set); // Set(0) {}

set.add(1);
console.log(set); // Set(1) {}

// 37-07
const set = new Set();

set.add(1).add(2);
console.log(set); // Set(2) {1, 2 }

// 37-08
const set = new Set();

set.add(1).add(2).add(2);
console.log(set); // Set(2) {1, 2}

// 37-09
const set = new Set();

console.log(NaN === NaN); // false
console.log(0 === -0); // true

// NaN과 NaN을 같다고 평가하여 중복 추가를 혀용하지 않는다.
set.add(NaN).add(NaN);

console.log(set); // Set(1) {NaN}

// +0과 -0을 같다고 평가하여 중복 추가를 혀용하지 않는다.
set.add(0).add(-0);
console.log(set); // Set(2) {NaN, 0}

// 37-10
const set = new Set();

set
  .add(1)
  .add("a")
  .add(true)
  .add(undefined)
  .add(null)
  .add({})
  .add([])
  .add(() => {});

console.log(set);
// Set(8) {
//   1,
//   'a',
//   true,
//   undefined,
//   null,
//   {},
//   [],
//   () => {}
// }

// ____37.1.4 요소 존재 여부 확인
// 37-11
const set = new Set([1, 2, 3]);

console.log(set.has(2)); // true
console.log(set.has(4)); // false

// ____37.1.5 요소 삭제
// 37-12
const set = new Set([1, 2, 3]);

// 요소 2를 삭제한다.
set.delete(2);
console.log(set); // set(2) {1, 3}

// 요소 1을 삭제하나다.
set.delete(1);
console.log(set); // set(1) {3}

// 37-13
const set = new Set([1, 2, 3]);

// 존재하지 않는 요소 0을 삭제하면 에러 없이 무시된다.
set.delete(0);
console.log(set); // Set(3) {1, 2, 3}

// 37-14
const set = new Set([1, 2, 3]);

// delete는 불리언 값을 반환한다.
set.delete(1).delete(2); // TypeError:

// ____37.1.6 요소 일괄 삭제
// 37-15
const set = new Set([1, 2, 3]);

set.clear();
console.log(); // set(0) {}

// ____37.1.7 요소 순회
// 37-16
const set = new Set([1, 2, 3]);

set.forEach((v, v2, set) => console.log(v, v2, set));
// 1 1 Set(3) {
//   1,
//   2,
//   3,
// }
// 2 2 Set(3) {
//   1,
//   2,
//   3,
// }
// 3 3 Set(3) {
//   1,
//   2,
//   3,
// }

// Set 객체는 이터러블이다. 따라서 for ...of 문으로 순회할 수 있다.

// 37-17
const set = new Set([1, 2, 3]);

// Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in set); // true

// 이터러블인 Set 객체는 for ...of 문으로 순회할 수 있다.
for (const value of set) {
  console.log(value); // 1 2 3
}

// 이터러블인 Set 객체는 스프레드 문법의 대상이 될 수 있다.
console.log([...set]); // [1, 2, 3]

// 이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다.
const [a, ...rest] = set;
console.log(a, rest); // 1, [2, 3]

// ____37.1.8 집합 연산

// 교집합. 집합 A와 집합 B의 공통 요소로 구성된다.

// 37-18
Set.prototype.intersection = function (set) {
  const result = new Set();

  for (const value of set) {
    // 2개의 set의 요소가 공통되는 요솜이면 교집합의 대상이다.
    if (this.has(value)) result.add(value);
  }

  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.intersection(setB)); // Set(2) {2, 4}
// setB와 setA의 교집합
console.log(setB.intersection(setA)); // Set(2) {2, 4}

// 37-19
Set.prototype.intersection = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.intersection(setB)); // Set(2) {2, 4}
// setB와 setA의 교집합
console.log(setB.intersection(setA)); // Set(2) {2, 4}

// 합집합. 집합 A와 집합 B의 중복 없는 모든 요소로 구성된다.
// 37-20
Set.prototype.union = function (set) {
  // this(Set 객체)를 복사
  const result = new Set(this);

  for (const value of set) {
    // 합집합은 2개의 Set 객체의 모든 요소로 구성된 집합니다. 중복된 요소는 포함되지 않는다.
    result.add(value);
  }

  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.union(setB)); // Set(4) {1, 2, 3, 4}
// setB와 setA의 교집합
console.log(setB.union(setA)); // Set(4) {1, 2, 3, 4}

// 37-21
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.union(setB)); // Set(4) {1, 2, 3, 4}
// setB와 setA의 교집합
console.log(setB.union(setA)); // Set(4) {1, 2, 3, 4}

// 차집합. 차집합 A-B는 집합 A에는 존재하지만 집합 B에는 존재하지 않는 요소로 구성된다.
// 37-22
Set.prototype.difference = function (set) {
  // this(Set 객체)를 복사
  const result = new Set(this);

  for (const value of set) {
    // 차집합은 어느 한쪽 집합에는 존재하지만 다른 한쪽 집합에는 존재하지 않는 요소로 구성된 집합이다.
    result.delete(value);
  }
  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA에 대한 setB의 차집합
console.log(setA.difference(setB)); // Set(2) {1, 3}
// setB에 대한 setA의 차집합
console.log(setB.difference(setA)); // Set(0) {}

// 37-23
Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA에 대한 setB의 차집합
console.log(setA.difference(setB)); // Set(2) {1, 3}
// setB에 대한 setA의 차집합
console.log(setB.difference(setA)); // Set(0) {}

// 부분 집합과 상위 집합. 집합 A가 집합 B에 포함되는 경우 집합 A는 집합 B의 부분 집합이며, 집합 B는 집합 A의 상위 집합이다.
// 37-24
//
Set.prototype.isSuperset = function (subset) {
  for (const value of subset) {
    //
    if (!this.has(value)) return false;
  }

  return true;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

//
console.log(setA.isSuperset(setB)); // true
console.log(setB.isSuperset(setA)); // false

// 37-25

// 37.2 Map
// ____37.2.1 Map 객체의 생성
// 37-26

// 37-27

// 37-28

// ____37.2.2 요소 개수 확인
// 37-29
// 37-30

// ____37.2.3 요소 추가
// 37-31
// 37-32
// 37-33
// 37-34
// 37-35

// ____37.2.4 요소 취득
// 37-36

// ____37.2.5 요소 존재 여부 확인
// 37-37

// ____37.2.6 요소 삭제
// 37-38
// 37-39
// 37-40
// ____37.2.7 요소 일괄 삭제
// 37-41
// ____37.2.8 요소 순회
// 37-42
// 37-43
// 37-44
