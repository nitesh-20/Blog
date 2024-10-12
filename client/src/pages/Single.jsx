import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHQOtZF7O5lap4HED8zZCpuuw7_yM03zC0w&s" alt="" />
      <div className="user">
       <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
        <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem itaque accusantium labore delectus soluta! Hic maiores atque vero a illo. Nisi excepturi sunt officiis impedit similique distinctio velit numquam quisquam?
        Dicta dolore ipsa similique non numquam maiores omnis consectetur, impedit nesciunt excepturi enim inventore <br /> expedita doloribus ducimus totam fuga provident veniam iure perspiciatis aperiam aliquam praesentium doloremque unde. Dignissimos, deserunt?
        Debitis eos odio ipsa ex laboriosam quibusdam fugiat est repellendus nihil voluptatum, cupiditate alias dolorem, incidunt aliquam, impedit cum ullam architecto! Optio distinctio, quos dolore facilis ex iste facere iure!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aut sint dolore minima a blanditiis. Explicabo dolore iure rem dolores saepe consequatur ipsam ipsa culpa, iste aliquid? Distinctio animi nostrum obcaecati.
        Totam id doloremque consequatur quo nostrum voluptatum enim. Nobis autem nam quasi accusamus debitis officiis consectetur animi consequuntur at fugit, vitae tenetur ducimus, magni nostrum non cum delectus? Architecto, mollitia.
      </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single