import './Xizmatlar.scss'
import titleImg from "../../../assets/images/img-title.png"
import addressIcon from "../../../assets/images/joylashuv.png"
import reklamaIcon from "../../../assets/images/reklama.png"
import pIcon from "../../../assets/images/p-icon.png"
import personIcon from "../../../assets/images/person-icon.png"
import humanIcon from "../../../assets/images/human-icon.png"

function Xizmatlar() {
    return (
        <div>
            <div className="wrapper11">
                <div className="hero">
                    <div className="hero__title">
                        <h1>Boburshoh prospektidagi ZamZam ko'p funktsiyali tibbiyot markazi</h1>
                        <div className="wrapper__button">
                            <button className='koruv__btn'>Koruvga yozilish</button>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>

                    <div className="hero__img">
                        <img src={titleImg} alt="Picture" />
                    </div>
                </div>



                <div className="wrapper__about">
                    <div className="joylashuv">
                        <p>Manzil:</p>
                        <div className="address">
                            <img src={addressIcon} alt="icon" />
                            <h3>Andijon, Boburshoh prospekti, 56, 1-bino</h3>
                        </div>

                        {/* <div className="reklama">
                        <img src={reklamaIcon} alt="icon" />
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iste.</h3>
                    </div> */}
                    </div>

                    <div className="phone">
                        <div className="mobil">
                            <p>Telefon</p>
                            <div className="phone__number">
                                <h2>+998 (90) 7654321</h2>
                                <h3>24/7</h3>
                            </div>
                        </div>
                    </div>

                    <div className="grafik">
                        <p>Ish grafigi</p>
                        <div className="block">
                            <h3>Ish kunlari, shanba, yakshanba: 8:00 dan 21:00 gacha</h3>
                            <button className='ochish__btn'>Ochish</button>
                        </div>
                    </div>

                    <div className="dostup">
                        <p>Klinikadagi mavjud imkoniyatlar:</p>
                        <div className="box">
                            <div className="block">
                                <img src={pIcon} alt="icon" />
                                <h3>Avtoturargohning mavjudligi</h3>
                            </div>

                            <div className="block">
                                <img src={personIcon} alt="icon" />
                                <h3>Lift orqali poliklinika atrofida harakatlanish mumkin</h3>
                            </div>

                            <div className="block">
                                <img src={humanIcon} alt="icon" />
                                <h3>Nogironlar aravachasi foydalanuvchilari uchun qulaylik</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Xizmatlar;