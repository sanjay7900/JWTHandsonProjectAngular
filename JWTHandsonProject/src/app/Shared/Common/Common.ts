export  class   Common{
   static CompactNumber( num:number):string{
        const formetter= Intl.NumberFormat("en",{
            notation:"compact"
        })
        return formetter.format(num);

    }
}