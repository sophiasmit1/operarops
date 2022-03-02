import Head from "next/head"
import Link from "next/link"
import styled from "styled-components"
import { NavBar } from "../../components/NavBar"
import Image from "next/image"
import { useEffect, useState } from "react"
import router, { useRouter } from "next/router"
import axios from "axios"

const Wrapper = styled.div`
    background: #EEF5FF;
    min-height: 100vh;
    width: 100%;
`

const BackBtn = styled.a`
    background: #FFFFFF;
    box-shadow:0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    font-style: normal;
    font-weight: 600;
    font-size:16px;
    line-height:24px;
    color: #3260A1;
    padding:15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 30px;
    outline:none;
    width:117px;
    height:45px;
    :hover{
        box-shadow:0px 0px 35px rgba(148, 174, 213, 1);
        transition: .3s all ease;
    }
`

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    background: #FFFFFF;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 100%;
`

const InputField = styled.div`
    display: flex;
    flex-direction:column;
    margin-bottom:15px;
`

const Input = styled.input`
    width:100%;
    display: flex;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
`

const TextLabel = styled.div`
    font-style:normal;
    font-weight:300;
    font-size:18px;
    line-height:21px;
    color: #222222;
    margin-bottom: 5px;
`

const FormBtn = styled.button`
    width: 139px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    background: #67BFFF;
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    border: none;
    margin: 0 auto;
    margin-top: 15px;
    cursor: pointer;
`
const RemovePostBtn = styled.a`
    font-style: normal;
    font-weight: 300;
    font-size:14px;
    line-height:15px;
    color: #FFFFFF;
    background: #E85050;
    box-shadow: 0px 10px 25 px rgba (148, 147, 213, 0.15);
    border-radius: 10px;
    position: absolute;
    top: 440px;
    width: 150px;
    height:25px;
    left:50%;
    bottom: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%);
    cursor: pointer;
`
export default function Operator({operators}:any){

    const removeOperator = async () => {
        await axios.post('http://localhost:5000/api/operator/remove', {operatorsId: operators._id})
        .then(() => {
            router.push('/')
        })
    }

    if (!operators) 'Loading...'

    const [phone, setPhone] = useState('');
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [phoneError, setPhoneError] = useState('Номер не может быть пустой.');


    const [sum, setSum] = useState('');
    const [sumDirty, setSumDirty] = useState(false);
    const [sumError, setSumError] = useState('Строка не может быть пустой.');
    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        if(sumError|| phoneError) {
           setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [phoneError, sumError])


    const phoneHandler = (e:any) => {
        setPhone(e.target.value)
        const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if(!re.test((e.target.value).toLowerCase())){
            setPhoneError("Номер веден не верно")
        }else{
            setPhoneError('')
        }
    }

    const sumHandler = (e:any) => {
        setSum(e.target.value)
        if (e.target.value < 1 || e.target.value > 1000)
         {
            setSumError("Сумма должна быть от 1 до 1000")
            if (!e.target.value){
                setSumError("Строка не может быть пустой.")
            }
        }else{
            setSumError('')
        }
    
    }

    const blurHander = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'sum':
                setSumDirty(true)
                break;
            case 'phone':
            setPhoneDirty(true)
                break;

        }
    }


    return(
        <Wrapper>
            <Head>
                <title>{operators.title}</title>
            </Head>
            <NavBar />
            <div className="container">
        <Link href={"/"}passHref>
            <BackBtn>
            <Image
                src="/static/arrow.svg"
                alt="Picture of the author"
                width={24}
                height={15}
             />
             Назад
          </BackBtn>
          </Link>
            <FormWrapper>
                <Form onSubmit={e => e.preventDefault}>
                    <InputField>
                        <TextLabel>
                        {operators.title}
                            </TextLabel>
                    </InputField>
                    <InputField>
                        <TextLabel>
                            Номер телефона
                        </TextLabel>
                        {(phoneDirty && phoneError) && <div style={{color: 'red'}}> {phoneError}</div>}
                            <Input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHander(e)} placeholder="Введите номер" name = 'phone' type='number' />
                    </InputField>
                    <InputField>
                        <TextLabel>
                            Сумма пополнения
                        </TextLabel>
                        {(sumDirty && sumError) && <div style={{color: 'red'}}> {sumError}</div>}
                        <Input onChange={e => sumHandler(e)} value={sum} onBlur={e => blurHander(e)} name= 'sum' type='number' placeholder="От 1 до 1000" />
                    </InputField>
                    <RemovePostBtn onClick={removeOperator}>Удалить оператора</RemovePostBtn>
                    <FormBtn disabled = {!formValid} onClick={() => alert('Оплата прошла успешно!')}> Добавить</FormBtn>
                </Form>
            </FormWrapper>
        </div>
        </Wrapper>
    )
}



export async function getServerSideProps(context: { query: { id: string; }; }) {
    const res = await fetch('http://localhost:5000/api/operator/' + context.query.id)
    const operators = await res.json()
  
    if (!operators) {
      return{
        notFount: true,
      }
    }
  
    return{
      props: {operators}, 
    }
  
  }