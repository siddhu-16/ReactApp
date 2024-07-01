import React,{useState} from 'react';
import useCurrencyInfo from '../custHook/currencyInfo'
import  {InputBox}   from '../currencyComp/index'

function Home() {

        const [amount, setAmount] = useState(0)
        const [from, setFrom] = useState("usd")
        const [to, setTo] = useState("inr")
        const [convertedAmount, setConvertedAmount] = useState(0)
      
        const currencyInfo = useCurrencyInfo(from)
      
        const options = Object.keys(currencyInfo)
      
        const swap = () => {
          setFrom(to)
          setTo(from)
          setConvertedAmount(amount)
          setAmount(convertedAmount)
        }
        
        const convert = () => {
          setConvertedAmount(amount * currencyInfo[to])
        }
      
        return (
          <div>
              <div className="w-full h-screen content-center ">
                  <div className="w-full max-w-md mx-auto border border-gray-60  content-center rounded-lg p-5 backdrop-blur-sm bg-white/30">
                      <form
                          onSubmit={(e) => {
                              e.preventDefault();
                              convert()
                             
                          }}
                      >
                          <div className="w-full mb-1">
                              <InputBox
                                  label="From"
                                  amount={amount}
                                  currencyOptions={options}
                                  onCurrencyChange={(currency) => setAmount(amount)}
                                  selectCurrency={from}
                                  onAmountChange={(amount) => setAmount(amount)}
                              />
                          </div>
                          <div className="relative w-full h-0.5">
                              <button
                                  type="button"
                                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                  onClick={swap}
                              >
                                  swap
                              </button>
                          </div>
                          <div className="w-full mt-1 mb-4">
                              <InputBox
                                  label="To"
                                  amount={convertedAmount}
                                  currencyOptions={options}
                                  onCurrencyChange={(currency) => setTo(currency)}
                                  selectCurrency={to}
                                  amountDisable
                              />
                          </div>
                          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                              Convert {from.toUpperCase()} to {to.toUpperCase()}
                          </button>
                      </form>
                  </div>
              </div>
          </div>
     
    );
}

export default Home;