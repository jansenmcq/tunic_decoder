export interface Letter {
    id: number;
    isConsonant: boolean;
    connections: number[];
    sound: string;
}



/*
Consonant:

   1 * 2
*       *          
3
*       *
  4  * 5


Vowel:

*   *   *
   1 2  3
     *
     4
     *
     5
     *
   6 7  8 
*    *   *

Other:

circled

bottom circle
