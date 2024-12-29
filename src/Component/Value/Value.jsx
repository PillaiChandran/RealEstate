import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

function Value() {
  return (
    <div>
    <img className='container-image' src="main3.jpg" alt="image" />
    <div className='info-text'>
    <h4>Our Value</h4>
    <h2> Value we give to you</h2>
    <span>We always help you to find the right Property <br/> Best service
       you can get is from us related to buying the best property that will
       have great value in future
     </span>
     </div>
     <Accordion className='accordion'
      allowMultipleExpanded={false}> 
            <AccordionItem>
                <AccordionItemHeading style={{width:"663px",fontWeight:"bolder",color:"darkblack"}}>
                    <AccordionItemButton  >
                    Best interest rates on the market
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                    <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading style={{width:"663px",fontWeight:"bolder",color:"darkblack"}}>
                    <AccordionItemButton  >
                    Prevent unstable prices
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading style={{width:"663px",fontWeight:"bolder",color:"darkblack"}}> 
                    <AccordionItemButton>
                    Best price on the market
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

    </div>
  )
}

export default  Value;
