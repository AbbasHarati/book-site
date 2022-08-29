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
                                    <Link to="/Ortho"> ارتودونسی</Link>
                                </li>
                                <li>
                                    <Link to="/endo"> اندودانتیکس</Link>
                                </li>
                                <li>
                                    <Link to="/tarmim"> ترمیمی</Link>
                                </li>
                                <li>
                                    <Link to="/surgery"> جراحی</Link>
                                </li>
                                <li>
                                    <Link to="/perio"> پریودانتیکس</Link>
                                </li>
                                <li>
                                    <Link to="/pediatric"> اطفال</Link>
                                </li>
                                <li>
                                    <Link to="/prosthetics"> پروتز</Link>
                                </li>
                                <li>
                                    <Link to="/dentalMaterials"> مواد دندانی</Link>
                                </li>
                                <li>
                                    <Link to="/oralMedicine"> بیماری های دهان</Link>
                                </li>
                                <li>
                                    <Link to="/basicSciences"> علوم پایه</Link>
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
