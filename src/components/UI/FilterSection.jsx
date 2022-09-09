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
                                    <Link to="/searchBooks?category_id=10">
                                        ارتودونسی
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks?category_id=11">
                                        اندودانتیکس
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks?category_id=12">
                                        ترمیمی
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks?category_id=13">
                                        جراحی
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks?category_id=14" >
                                        پریودانتیکس
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks?category_id=15">
                                        اطفال
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks?category_id=16">
                                        پروتز
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks?category_id=17">
                                        بیماری های دهان
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/searchBooks?category_id=18" >
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
