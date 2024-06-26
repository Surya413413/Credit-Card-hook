import {useState} from 'react'

import {
  CustomHomeContainer,
  CustomCrditContainer,
  CustomInputContainer,
  Heading,
  Image,
  HeadingPayment,
  Input,
  HeadingCardHolder,
  Para,
} from './styledComponents'

const CreditCard = () => {
  const [currentNumber, setNumber] = useState('')
  const [currentName, setName] = useState('')

  const onChangeCardNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <CustomHomeContainer>
      <CustomCrditContainer>
        <Heading>CREDIT CARD</Heading>
        <Image data-testid="creditCard">
          <Para>{currentNumber}</Para>
          <HeadingCardHolder>CARDHOLDER NAME</HeadingCardHolder>
          <Para>{currentName.toUpperCase()}</Para>
        </Image>
      </CustomCrditContainer>
      <CustomInputContainer>
        <HeadingPayment>Payment Method</HeadingPayment>
        <Input
          type="text"
          placeholder="Card Number"
          onChange={onChangeCardNumber}
        />
        <Input
          type="text"
          placeholder="Cardholder Name"
          onChange={onChangeName}
        />
      </CustomInputContainer>
    </CustomHomeContainer>
  )
}
export default CreditCard
