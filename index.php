<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        class PaymentProcessor{

            public function_construct($paymentMethod){

                private $this->PaymentMethod = $paymentMethod; 

            }

            public function isCreditCard(){

                if ($this->PaymentMethod == "CreditCard"){
                    return true;
                }
                return false;
            }
            public function isDebit(){

                if ($this->PaymentMethod == "Debit"){
                    return true;
                }
                return false;

            }
            public function isPix(){
                
                if ($this->PaymentMethod == "Pix"){
                    return true;
                }
                return false;

            }
            public function isBoleto(){
                
                if ($this->PaymentMethod == "Boleto"){
                    return true;
                }
                return false;

            }
            
            

            public function paymentForCreditCard($quantia){
                
                if ()
            }

            public function paymentForDebit($quantia){


            }

            public function paymentForPix($quantia){

            }

            public function paymentForBoleto($quantia){

            }

        }
    


    ?>
</body>
</html>