
export interface Employee{
  code: string;
  firstName : string;
  lastName : string;
  gender : string;
  age : number;
}

export class employee implements Employee{
  constructor(public code : string, public firstName: string, public lastName: string,
                public gender : string, public age: number){}
}