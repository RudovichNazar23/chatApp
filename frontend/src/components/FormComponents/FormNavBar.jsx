export default function FormNavBar({ onClickHandler, isOpen }){
    return (
        <nav class="navbar navbar-light bg-light" style={{width: "100%"}}>
            <div class="container-fluid">
                <a class="navbar-brand">
                    <i className="m-1">chatApp</i>
                    <img src="/chat.png" width="40" height="40" class="d-inline-block align-text-top m-1" />
                </a>
                <div className="" style={{float: "right"}}>
                    <button className="nav-link" onClick={onClickHandler}>
                        {
                            isOpen ? "Login" : "Registration"
                        }
                    </button>
                </div>
            </div>
        </nav>
    );
};