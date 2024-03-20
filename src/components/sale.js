// Sale component
import one from "../assets/sale.jpeg"

function Sale() {
    return (
        <div className="sale-image">
            <img src={one} alt="sale1" />

            <div className="sale-image__offer">
                <h1>Udemy Flash Sale! 24 Hours to Save</h1>
                <p>Get the top Courses for just 499 and Get Lifetime Access</p>
            </div>
        </div>
    )
}

export default Sale