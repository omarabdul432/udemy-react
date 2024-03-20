import two from "../assets/c1.jpg"
import three from "../assets/c2.jpg"
import four from "../assets/c3.jpg"
import five from "../assets/c4.jpg"


function Course() {
    return (
        <div class="recommended">
            <h1 class="recommended__title">Recommended For you</h1>
            <p>pick the best fit</p>

            <div class="recommended__container">
                <div class="course_card">
                    <img src={two} />
                    <h2>2023 Python Data Visualization Masterclass</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={three} />
                    <h2>Web Development</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={four} />
                    <h2>Programming beginner to expert</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={five} />
                    <h2>Java Programming</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Course