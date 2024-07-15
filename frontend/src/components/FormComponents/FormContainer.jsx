export default function FormContainer({ children }){
    return (
        <div className="d-flex flex-column align-items-center"
             style={{height: "925px"}}
        >
            { children }
        </div>
    );
};