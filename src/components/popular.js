// Popular component
import two from "../assets/c1.jpg"
import three from "../assets/c2.jpg"
import four from "../assets/c3.jpg"
import five from "../assets/c4.jpg"

function Popular() {
    return (
        <div class="popular">
            <h1 class="popular__title">Most popular</h1>
            <div class="popular__container">
                <div class="course_card">
                    <img src={two} alt="course1" />
                    <h2>2023 Python Data Visualization Masterclass</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={three} alt="course2" />
                    <h2>Web Development</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={four} alt="course3" />
                    <h2>Programming beginner to expert</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={five} alt="course4" />
                    <h2>Java Programming</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={two} alt="course5" />
                    <h2>Programming beginner to expert</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={three} alt="course6" />
                    <h2>Java Programming</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={four} alt="course7" />
                    <h2>2023 Python Data Visualization Masterclass</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>

                <div class="course_card">
                    <img src={five} alt="course8" />
                    <h2>Web Development</h2>
                    <p>Col Stelee</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>499 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Popular