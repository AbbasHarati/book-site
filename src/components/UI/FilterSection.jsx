import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import '../../styles/filter-section.css'


const FilterSection = () => {
    return (
        <>
            <div className='accordion__section'>
                <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="0" flush>
                        <Accordion.Header>
                            <h5>
                                دسته بندی تخصص ها
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "orthodontics" }} >
                                        ارتودونسی
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "endodontics" }} >
                                        اندودانتیکس
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "operative" }} >
                                        ترمیمی
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "surgery" }} >
                                        جراحی
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "periodontics" }} >
                                        پریودانتیکس
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "pediatric" }} >
                                        اطفال
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "prosthesis" }} >
                                        پروتز
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "oralMedicine" }} >
                                        بیماری های دهان
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks" state={{ category: "basicSciences" }} >
                                        علوم پایه
                                    </Link>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h5>
                                سوالات آزمون ها
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>
                                    <Link to=""> سوالات آزمون دستیاری</Link>
                                </li>
                                <li>
                                    <Link to=""> سوالات آزمون تخصص</Link>
                                </li>
                                <li>
                                    <Link to=""> سوالات آزمون ارتقاء</Link>
                                </li>
                                <li>
                                    <Link to=""> سوالات آزمون ملی</Link>
                                </li>
                                <li>
                                    <Link to=""> سوالات آزمون علوم پایه</Link>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default FilterSection
