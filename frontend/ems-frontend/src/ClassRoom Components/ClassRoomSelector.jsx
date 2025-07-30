import React,{useState} from "react";
import ClassRoom from "./ClassRoom";
import "./style for ClassroomSelector.css";



 function ClassroomSelector() {
            const [selectedRoom, setSelectedRoom] = React.useState(null);

            const rooms = [
                '309', '302', '311', '307',
                '313', '203', '202', '207'
            ];

            return (
                <div className="container">
                    {selectedRoom ? (
                        <ClassRoom room={selectedRoom} onBack={() => setSelectedRoom(null)} />
                    ) : (
                        <>
                            <h2>Select a Classroom</h2>
                            <div className="room-grid">
                                {rooms.map((room) => (
                                    <div
                                        key={room}
                                        className="room-box"
                                        onClick={() => setSelectedRoom(room)}
                                    >
                                        CR-{room}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            );
        }

        export default ClassroomSelector;