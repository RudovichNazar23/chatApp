export default function FormGroup({ labelName, inputType }){
    return (
        <div className="mb-3">
            <label className="form-label">{labelName}</label>
            <input type={inputType || "text"} className="form-control" />
        </div>
    );
};