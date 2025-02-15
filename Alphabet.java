class Alphabet 
{
	public static void main(String[] args) 
	{   char a,b,c,d;

		for(a=65;a<=90;a++)
		System.out.print(a +" ");
		System.out.println("\n");
		
		for(b=90;b>=65;b--)
        System.out.print(b +  " ");
		System.out.println("\n");
		
		for(c=97;c<=122;c++)
		System.out.print(c +" ");
		System.out.println("\n");

		for(d=122;d>=97;d--)
        System.out.print(d +  " ");
		System.out.println("\n");
	}
}
/*A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

Z Y X W V U T S R Q P O N M L K J I H G F E D C B A

a b c d e f g h i j k l m n o p q r s t u v w x y z

z y x w v u t s r q p o n m l k j i h g f e d c b a
*/