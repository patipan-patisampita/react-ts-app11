import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Section extends Component {
    render() {
        return (
            <div className="container shadow-lg mt-3 mb-3 p-2 rounded shadow">

                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">
                            <span className="text-center fs-3 text-primary">บริการชุมชน </span>
                            <span className="text-center fs-3">ของเรา</span>
                            <div className="undeline mx-auto my-2"></div>
                            <p className="text-center fs-5">ข่าวอาชีวศึกษา</p>
                        </h2>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-4">
                        <div className="card shadow rounded"  style={{ width: '25rem' }}>
                            <img src={require('../images/news1.jpg')} height={'300px'} className="card-img-top" alt="img1"/>
                                <div className="card-body">
                                    <h5 className="card-title text-start">ส่งเสริมสนับสนุนและพัฒนา</h5>
                                    <div className="undeline"></div>
                                    <p className="card-text text-start">
                                    ศูนย์บ่มเพาะวิสาหกิจเพื่อการศึกษาหมายถึงหน่วยงานที่สำนักคณะกรรมการการอาชีวศึกษา 
                                    จัดตั้งขึ้นในทุกๆสถานศึกษาในสังกัดโดยมีวัตถุประสงค์เพื่อส่งเสริมสนับสนุนและพัฒนาขีด 
                                    ความสามารถของนักเรียนนักศึกษาประชาชนทั่วไปที่สนใจให้สามารถนำความรู้ ทักษะวิชาชีพ 
                                    เพื่อสร้างเสริมประสบการณ์เชิงพาณิชย์ให้มีความพร้อมที่จะเริ่มประกอบธุระกิจของตนเอง 
                                    หรือพัฒนาต่อยอดธุระกิจได้อย่างมั่นคงและยั่งยืน
                                    </p>
                                    <Link to="#" className='btn btn-primary text-start'>Read Me</Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow rounded"  style={{ width: '25rem' }}>
                            <img src={require('../images/news2.jpg')} height={'300px'} className="card-img-top" alt="img1"/>
                                <div className="card-body">
                                    <h5 className="card-title text-start">การให้คำปรึกษาด้านธุรกิจ</h5>
                                    <div className="undeline"></div>
                                    <p className="card-text text-start">
                                   <ul>
                                       <li>บริการให้คำปรึกษา และการดูแลอย่างใกล้ชิดจากเจ้าหน้าที่บ่มเพาะวิสาหกิจ ในเรื่องการจัดตั้ง แผนธุรกิจ และเริ่มต้นดำเนินธุรกิจ</li>
                                       <li>บริการเป็นตัวกลางในการประสานงานแนะนำทีมที่ปรึกษาเฉพาะทาง</li>
                                       <li>บริการฝึกอบรม ให้ความรู้พื้นฐานและกิจกรรมเสริมสร้างความเข็มแข็งในการดำเนินธุรกิจประกอบด้วย การตลาด การเงินการบัญชี จัดการวิทยาศาสตร์และเทคโนโลยี เพื่อที่จะได้ทำแผนธุรกิจได้โดยถูกต้อง</li>
                                   </ul>
                                    </p>
                                    <Link to="#" className='btn btn-primary text-start'>Read Me</Link>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow rounded"  style={{ width: '25rem' }}>
                            <img src={require('../images/news3.jpg')} height={'300px'} className="card-img-top" alt="img1"/>
                                <div className="card-body">
                                    <h5 className="card-title text-start">การบ่มเพาะฯ</h5>
                                    <div className="undeline"></div>
                                    <p className="card-text text-start">
                                    <ul>
                                        <li>การบ่มเพาะแบบ in-wall incubation คือ ผู้ถูกบ่มเพาะจะต้องเข้ามาอยู่ในศูนย์บ่มเพาะวิสาหกิจ 
                                            ที่ศูนย์บ่มเพาะฯจัดเตรียมไว้ให้เต็มเวลาของช่วงระยะการบ่มเพาะ 
                                            ตลอดจนมีที่ปรึกษาเป็นพี่เลี้ยงดูแลให้ตลอดช่วงเวลาของการบ่มเพาะ
                                        </li>
                                        <li>การบ่มเพาะแบบ out-wall incubation คือ ผู้รับการบ่มเพาะมีสถานที่ตั้งธุรกิจ มีสำนักงาน 
                                            อุปกรณ์เครื่องมือ เครื่องจักรของตนเอง ต้องการเพียงการบริการปรึกษาแนะนำ 
                                            จากเจ้าหน้าที่บ่มเพาะวิสาหกิจ และที่ปรึกษาเฉพาะทางซึ่งให้คำปรึกษาในเชิงลึก
                                        </li>
                                    </ul>
                                    </p>
                                    <Link to="#" className='btn btn-primary text-start'>Read Me</Link>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Section;