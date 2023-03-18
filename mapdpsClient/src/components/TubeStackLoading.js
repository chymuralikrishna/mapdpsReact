import React, { useState, useEffect, useRef ,useAxios} from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Messages } from 'primereact/messages';
import { InputText  } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";

function TubeStackLoading() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const msgs = useRef(null);
    const options = ['Auto', 'Manual'];
    const rejEleDisplay = {
        centralelementsrejectedqty: 'block',
        innerelementsrejectedqty: 'block',
        outerelementsrejectedqty: 'block',
        central37elementsrejectedqty: 'none',
        inner1elementsrejectedqty: 'none',
        inner2elementsrejectedqty: 'none',
        outer1elementsrejectedqty: 'none',
        outer2elementsrejectedqty: 'none'
    };
    const shiftList = [
        { name: 'I', code: '1' },
        { name: 'II', code: '2' },
        { name: 'III', code: '3' }
    ];
    const countryList = [
        { name: 'RUSSIA', code: 'RUSSIA' },
        { name: 'FRANCE', code: 'FRANCE' },
        { name: 'KAZAKHSTAN', code: 'KAZAKHSTAN' }
    ];
    const [autoManual, setAutoManual] = useState(options[0]);
    const [traynumber, setTraynumber] = useState('');
    const [tareweight, setTareweight] = useState(0);
    const [uo2lotnumber, setUo2lotnumber] = useState('');
    const [centralelementsrejectedqty, setCentralelementsrejectedqty] = useState(0);
    const [innerelementsrejectedqty, setInnerelementsrejectedqty] = useState(0);
    const [outerelementsrejectedqty, setOuterelementsrejectedqty] = useState(0);
    const [central37elementsrejectedqty, setCentral37elementsrejectedqty] = useState(0);
    const [inner1elementsrejectedqty, setInner1elementsrejectedqty] = useState(0);
    const [inner2elementsrejectedqty, setInner2elementsrejectedqty] = useState(0);
    const [outer1elementsrejectedqty, setOuter1elementsrejectedqty] = useState(0);
    const [outer2elementsrejectedqty, setOuter2elementsrejectedqty] = useState(0);
    const [tubesgrossweight9, setTubesgrossweight9] = useState(0);
    const [tubesgrossweight10, setTubesgrossweight10] = useState(0);
    const [grossweight, setGrossweight] = useState(0);
    const [netweight, setNetweight] = useState(0);
    const [avgnetwgtperelement, setAvgnetwgtperelement] = useState(0);
    const [dcrType, setDcrType] = useState(0);
    const [nitrogen, setNitrogen] = useState(0);
    const [creationdate, setCreationdate] = useState(null); //date
    const [shift, setShift] = useState(options[0]); // select 
    const [sourcecountry, setSourcecountry] = useState(options[0]); //select
    const [remarks, setRemarks] = useState('');

    const TubeStackLoadingPojo = [
        { name: 'I', code: '1' },
        { name: 'II', code: '2' },
        { name: 'III', code: '3' }
    ];
    
    // const { data, error, loading } = useAxios({
    //     url: "http://localhost:8082/getTubeStackLoad"
    //   });
    

    // useEffect(() => {
    //     msgs.current.show(
    //         { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
    //     );
    // }, []);

    const getWeightFromScale=()=>{
        return Math.random();
    };

    return (<div>


        <table>
            <tr><td><Messages ref={msgs} /></td></tr>

            <tr><td></td>
                <td><div className="card flex justify-content-left">
                    <SelectButton height={"16px"} value={autoManual} onChange={(e) => setAutoManual(e.value)} options={options} />
                </div></td></tr>


            <tr><td><label htmlFor="traynumber" className="font-bold block mb-2">Tray Number</label></td>
                <td><div className="card flex justify-content-left"><InputText style={{height: "16px"}}  inputId="traynumber" value={traynumber} onChange={(e) => setTraynumber(e.target.value)} /></div></td></tr>

            <tr><td><label htmlFor="tareweight" className="font-bold block mb-2">Tare Weight</label></td>
                <td><div className="card flex justify-content-left p-inputgroup"><InputNumber style={{height: "16px"}} inputId="tareweight" value={tareweight} onChange={(e) => setTareweight(e.target.value)} />
                    <Button style={{height: "16px"}} onClick={e=>setTareweight(getWeightFromScale())}   label="Get Weight" className="p-button-warning" /></div> </td></tr>

            <tr><td><label htmlFor="uo2lotnumber" className="font-bold block mb-2">UO2 Lot Number</label></td>
                <td><div className="card flex justify-content-left"><InputText style={{height: "16px"}}  inputId="uo2lotnumber" value={uo2lotnumber} onChange={(e) => setUo2lotnumber(e.target.value)} /></div></td></tr>

            
                <tr style={{display: rejEleDisplay.centralelementsrejectedqty},{}} ><td><label  htmlFor="centralelementsrejectedqty" className="font-bold block mb-2">Central Tube Rejected Qty</label> </td>
                    <td> <div >
                        <InputNumber style={{height: "16px"}} inputId="centralelementsrejectedqty" value={centralelementsrejectedqty} 
                        onValueChange={(e) => setCentralelementsrejectedqty(e.value)} showButtons buttonLayout="horizontal"  min={0} 
                            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" 
                            incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                    </div>
                    </td>
                </tr>
            
            <tr style={{ display: rejEleDisplay.innerelementsrejectedqty },{}}><td><label htmlFor="innerelementsrejectedqty" className="font-bold block mb-2">Inner Tube Rejected Qty</label></td>
                <td> <div className="card flex justify-content-left">
                    <InputNumber style={{height: "16px"}} inputId="innerelementsrejectedqty" value={innerelementsrejectedqty} onValueChange={(e) => setInnerelementsrejectedqty(e.value)} showButtons buttonLayout="horizontal"  min={0}
                        decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
                </td>
            </tr>
            <tr style={{ display: rejEleDisplay.outerelementsrejectedqty },{}}><td><label htmlFor="outerelementsrejectedqty" className="font-bold block mb-2">Outer Tube Rejected Qty</label></td>
                <td> <div className="card flex justify-content-left">
                    <InputNumber style={{height: "16px"}} inputId="outerelementsrejectedqty" value={outerelementsrejectedqty} onValueChange={(e) => setOuterelementsrejectedqty(e.value)} showButtons buttonLayout="horizontal"  min={0}
                        decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
                </td>
            </tr>
            <tr style={{ display: rejEleDisplay.central37elementsrejectedqty }}><td><label htmlFor="central37elementsrejectedqty" className="font-bold block mb-2">37 Central Tube Rejected Qty</label></td>
                <td> <div className="card flex justify-content-left">
                    <InputNumber style={{height: "16px"}} inputId="central37elementsrejectedqty" value={central37elementsrejectedqty} onValueChange={(e) => setCentral37elementsrejectedqty(e.value)} showButtons buttonLayout="horizontal"  min={0}
                        decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
                </td>
            </tr>
            <tr style={{ display: rejEleDisplay.inner1elementsrejectedqty }}><td><label htmlFor="inner1elementsrejectedqty" className="font-bold block mb-2">37 Inner I Tube Rejected Qty</label></td>
                <td> <div className="card flex justify-content-left">
                    <InputNumber style={{height: "16px"}} inputId="inner1elementsrejectedqty" value={inner1elementsrejectedqty} onValueChange={(e) => setInner1elementsrejectedqty(e.value)} showButtons buttonLayout="horizontal"  min={0}
                        decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
                </td>
            </tr>

            <tr style={{ display: rejEleDisplay.inner2elementsrejectedqty }}><td><label htmlFor="inner2elementsrejectedqty" className="font-bold block mb-2">37 Inner II Tube Rejected Qty</label></td>
                <td> <div className="card flex justify-content-left">
                    <InputNumber style={{height: "16px"}} inputId="inner2elementsrejectedqty" value={inner2elementsrejectedqty} onValueChange={(e) => setInner2elementsrejectedqty(e.value)} showButtons buttonLayout="horizontal"  min={0}
                        decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
                </td>
            </tr>
            <tr style={{ display: rejEleDisplay.outer1elementsrejectedqty }}><td><label htmlFor="outer1elementsrejectedqty" className="font-bold block mb-2">37 Outer I Tube Rejected Qty</label></td>
                <td> <div className="card flex justify-content-left">
                    <InputNumber style={{height: "16px"}} inputId="outer1elementsrejectedqty" value={outer1elementsrejectedqty} onValueChange={(e) => setOuter1elementsrejectedqty(e.value)} showButtons buttonLayout="horizontal"  min={0}
                        decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
                </td>
            </tr>
            <tr style={{ display: rejEleDisplay.outer2elementsrejectedqty }}><td><label htmlFor="outer2elementsrejectedqty" className="font-bold block mb-2">37 Outer II Tube Rejected Qty</label></td>
                <td> <div className="card flex justify-content-left">
                    <InputNumber style={{height: "16px"}} inputId="outer2elementsrejectedqty" value={outer2elementsrejectedqty} onValueChange={(e) => setOuter2elementsrejectedqty(e.value)} showButtons buttonLayout="horizontal"  min={0} 
                        decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                </div>
                </td>
            </tr>


            <tr><td><label htmlFor="tubesgrossweight9" className="font-bold block mb-2">9 Tubes Gross Weight</label></td>
                <td><div className="card flex justify-content-left"><InputNumber style={{height: "16px"}} inputId="tubesgrossweight9" value={tubesgrossweight9} onChange={(e) => setTubesgrossweight9(e.target.value)} />
                    <Button style={{height: "16px"}} onClick={e=>setTubesgrossweight9(getWeightFromScale())}  label="Get Weight" className="p-button-warning" /></div> </td></tr>

            <tr><td><label htmlFor="tubesgrossweight10" className="font-bold block mb-2">10 Tubes Gross Weight</label></td>
                <td><div className="card flex justify-content-left"><InputNumber style={{height: "16px"}} inputId="tubesgrossweight10" value={tubesgrossweight10} onChange={(e) => setTubesgrossweight10(e.target.value)} />
                    <Button style={{height: "16px"}} onClick={e=>setTubesgrossweight10(getWeightFromScale())} label="Get Weight" className="p-button-warning" /></div> </td></tr>

            <tr><td><label htmlFor="grossweight" className="font-bold block mb-2">Gross Weight</label></td>
                <td><div className="card flex justify-content-left"><InputNumber style={{height: "16px"}} inputId="grossweight" value={grossweight} onChange={(e) => setGrossweight(e.target.value)} />
                    <Button style={{height: "16px"}} onClick={e=>setGrossweight(getWeightFromScale())} label="Get Weight" className="p-button-warning" /></div> </td></tr>

            <tr><td><label htmlFor="netweight" className="font-bold block mb-2">Net Weight</label></td>
                <td><div className="card flex justify-content-left"><InputNumber style={{height: "16px"}} inputId="netweight" value={netweight} onChange={(e) => setNetweight(e.target.value)} /></div></td></tr>

            <tr><td><label htmlFor="avgnetwgtperelement" className="font-bold block mb-2">Average Net Wt./Element(Kgs.)</label></td>
                <td><div className="card flex justify-content-left"><InputText style={{height: "16px"}}  inputId="avgnetwgtperelement" value={avgnetwgtperelement} onChange={(e) => setAvgnetwgtperelement(e.target.value)} /></div></td></tr>

            <tr><td><label htmlFor="dcrType" className="font-bold block mb-2">D.C.R.Type</label></td>
                <td><div className="card flex justify-content-left"><InputText style={{height: "16px"}}  inputId="dcrType" value={dcrType} onChange={(e) => setDcrType(e.target.value)} /></div></td></tr>

            <tr><td><label htmlFor="nitrogen" className="font-bold block mb-2">Nitrogen</label></td>
                <td><div className="card flex justify-content-left"><InputText style={{height: "16px"}}  inputId="nitrogen" value={nitrogen} onChange={(e) => setNitrogen(e.target.value)} /></div></td></tr>

            <tr><td><label htmlFor="creationdate" className="font-bold block mb-2">Loading Date</label></td>
                <td><div className="card flex justify-content-left"><Calendar style={{height: "16px"}} inputId="creationdate" value={creationdate} onChange={(e) => setCreationdate(e.value)} showIcon /></div></td></tr>

            <tr><td><label htmlFor="shift" className="font-bold block mb-2">Shift</label></td>
                <td><div className="card flex justify-content-left">
                    <Dropdown  inputId="shift" value={shift} onChange={(e) => setShift(e.value)} options={shiftList} optionLabel="name"
                        placeholder="Select a Shift" className="w-full md:w-1100%" /></div></td></tr>

            <tr><td><label htmlFor="sourcecountry" className="font-bold block mb-2">Source Country</label></td>
                <td><div className="card flex justify-content-left">
                    <Dropdown inputId="sourcecountry" value={sourcecountry} onChange={(e) => setSourcecountry(e.value)} options={countryList} optionLabel="name"
                        placeholder="Select a Country" className="w-full md:w-1100%" /></div></td></tr>

            <tr><td><label htmlFor="remarks" className="font-bold block mb-2">Remarks</label></td>
                <td><div className="card flex justify-content-left"><InputTextarea  inputId="remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)} /></div></td></tr>

            <tr>
                <td><div className="card flex justify-content-center">
                <Button label="Save" /></div></td>
                <td><div className="card flex justify-content-center">
                <Button label="Reset" /></div></td>
            </tr>
        </table>

    </div>);
}


export default TubeStackLoading;