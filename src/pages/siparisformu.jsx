import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`
const Header = styled.div`
background: red;
display: flex;   
`;
const Title = styled.h1`
color: white;


`
const Form = styled.form`

`

function Siparisformu() {
    return (
        <Wrapper>
        <Header>
            <Title>
                Teknolojik Yemekler
            </Title>
        </Header>
        <Form>
            <h2>
                aaaaaaa
            </h2>
            <p>
            Boyut Seç *
            <label>
                <input type="radio" name='boyut'/>
                opsiyon 1
            </label>
            <label>
                <input type="radio" name='boyut'/>
                opsiyon 2
            </label>
            <label>
                <input type="radio" name='boyut'/>
                opsiyon 3
            </label>
            </p>
            <label>
                Hamur Seç *
                <select>
                    <option value="ince">İnce hamur</option>
                    <option value="orta">Orta hamur</option>
                    <option value="kalın">Kalın hamur</option>
                </select>
            </label>
            <p>
            Ek Malzemeler
            <label>
                <input type="checkbox" name='opsiyon1'/>
                opsiyon 1
            </label>
            <label>
                <input type="checkbox" name='opsiyon2'/>
                opsiyon 2
            </label>
            <label>
                <input type="checkbox" name='opsiyon3'/>
                opsiyon 3
            </label>
            </p>

            
            

        </Form>
        </Wrapper>
        
    )
}

export default Siparisformu
