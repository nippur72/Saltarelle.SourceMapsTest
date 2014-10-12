using System;
using System.Collections.Generic;
using System.Text;

namespace ClassLibrary1
{
   public class Class1
   {                                  
      public int a;                    

      public static void hello()
      {
         method(55); 
         Class2.method(5);                                                       
         Class3.method(1); 
      }

      static int method(int b)
      {
         var a = 53;                                           
         a=a*b;                  
         a=a/50;            
         a=a/50;          
         a=a/50;           
         return a;
      }      

      public void x()
      {
         method(a);
      }

   }

}
