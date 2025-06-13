export default class MathUtils{
    static singleNumber(n:number){
      return (n + '').split('').map(Number)
    }
}