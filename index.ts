/*
I. Tính Đa Hình (Polymorphism):
1. Tính đa hình đề cập đến khả năng của một đối tượng để hiển thị các hành vi khác nhau dựa trên ngữ cảnh.
2. Trong TypeScript, tính đa hình thường được thực hiện thông qua các cơ chế như kế thừa và giao diện.
+ Kế thừa cho phép một lớp con kế thừa các thuộc tính và phương thức của một lớp cha, nhưng có thể triển khai lại chúng một cách khác nhau.
+ Giao diện cho phép một đối tượng thực hiện một loạt các phương thức cụ thể mà không bị ràng buộc bởi kiểu đối tượng cụ thể.
 */
// Kế thừa:
class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // Output: Woof!
cat.makeSound(); // Output: Meow!
// Giao diện:
interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(circle.area()); // Output: ~78.54
console.log(rectangle.area()); // Output: 24


/*
II. Tính Trừu Tượng (Abstraction):
1. Tính trừu tượng đề cập đến việc ẩn các chi tiết cụ thể và chỉ hiển thị các tính năng cần thiết của một đối tượng.
2. Trong TypeScript, tính trừu tượng thường được thực hiện thông qua các lớp trừu tượng (abstract classes) và giao diện (interfaces).
+ Một lớp trừu tượng không thể được khởi tạo trực tiếp, nhưng có thể chứa các phương thức trừu tượng mà các lớp con phải triển khai.
+ Giao diện là một hợp đồng để một đối tượng thực hiện các phương thức cụ thể, nhưng không quan tâm đến cách chúng được triển khai.
*/
// Lớp trừu tượng:
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // Output: Woof!
cat.makeSound(); // Output: Meow!
