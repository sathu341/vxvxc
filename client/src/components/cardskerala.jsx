import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import k  from  './images/kochi.jpg'
import alap from './images/alappuzha.jpg';
import  mn from './images/munnar.jpg';
import svp from './images/s_vallay_park.jpg'
import { Container, Row,Col } from 'react-bootstrap';
import '../App.css'
import { useState } from 'react';
function Cardskerala(){
    const [title,setTitle]=useState("")
    
    const record=[
        {idno:1,title:'Kochi',
            description:"Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, ",imageUrl:k},
        {idno:2,title:'Alappuzha',
        description:" Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. ",imageUrl:alap},
        {idno:3,title:'Munnar',
         description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:mn},   
         {idno:4,title:'Slient Valley',
            description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:svp},   
            {idno:5,title:'Kozhikode',
                description:"Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, ",imageUrl:k},
            {idno:6,title:'Alappuzha',
            description:" Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. ",imageUrl:alap},
            {idno:7,title:'Munnar',
             description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:mn},   
             {idno:8,title:'Slient Valley',
                description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:svp},                             
    ]
    return(
        <>
       <Container className="margint">
        <Row className='mb-3'> 
            <Col>
             <input type="text" name="sch" onChange={(e)=>{
                   setTitle(e.target.value)
             }} className='form-control' placeholder='type  place name here!'/>
             
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
            <Button variant='success' onClick={()=>{
                setTitle("")
            }}>
                All
            </Button>
            </Col>
            {
                record.length>0&& 
                record.map((item)=>{
                    return(
                        <Col key={item.idno}>
                        <Button variant='info' onClick={(e)=>{
                            setTitle(item.title)
                        }}>
                            {item.title}
                        </Button> 
                      
                        </Col>
                    )
                })
            }
        </Row>
        <Row>
            {    
                 record.length>0?  
                
                 record.filter((rec)=>{
                    return(rec.title.toLocaleLowerCase().match(title.toLocaleLowerCase()))
                 })

             
                 .map((list)=>{
                   return(
                    <Col lg={3} className='mb-2' key={list.idno}>
                    <Card>
                        <Card.Img variant="top" src={list.imageUrl}  style={{height:'120px'}}/>
                        <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                                <Card.Text>
                                 {list.description}
                                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    
                </Col>
                   )
                 })
                 
                 
                 :"No Data Found"

            }
      

       
        </Row>
       </Container>
     
        </>
    )
}

export default Cardskerala;