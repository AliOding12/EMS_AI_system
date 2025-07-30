import React, { useState, useEffect } from "react";
import "./style.css";
import studentsData from "./studentsData.json";

function ClassRoom(props) {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState("All");
    const [seatingArrangement, setSeatingArrangement] = useState({});

    // Function to fetch students from JSON data
    const fetchStudents = () => {
        return new Promise((resolve) => {
            // Simulate API call delay
            setTimeout(() => {
                resolve(studentsData.students);
            }, 100);
        });
    };

    useEffect(() => {
        loadStudents();
    }, []);

    useEffect(() => {
        filterStudents();
    }, [students, selectedBatch]);

    const loadStudents = async () => {
        try {
            const studentData = await fetchStudents();
            setStudents(studentData);
            
            // Create initial seating arrangement using map function
            const arrangement = {};
            studentData.map(student => {
                arrangement[student.seatingPlaceNo] = student;
                return student;
            });
            setSeatingArrangement(arrangement);
        } catch (error) {
            console.error("Error loading students:", error);
        }
    };

    const filterStudents = () => {
        if (selectedBatch === "All") {
            setFilteredStudents(students);
        } else {
            // Using filter and map functions for filtering
            const filtered = students
                .filter(student => student.department === selectedBatch)
                .map(student => ({ ...student }));
            setFilteredStudents(filtered);
        }
    };

    const randomizeSeating = () => {
        const studentsToArrange = selectedBatch === "All" ? students : filteredStudents;
        const shuffled = [...studentsToArrange].sort(() => Math.random() - 0.5);
        
        const newArrangement = {};
        shuffled.map((student, index) => {
            newArrangement[index + 1] = student;
            return student;
        });
        
        setSeatingArrangement(newArrangement);
    };

    const handleBatchChange = (e) => {
        setSelectedBatch(e.target.value);
    };

    const renderSeatPairs = () => {
        const maxSeats = 30;
        const pairs = [];
        
        // Using map function to create seat pairs
        const seatNumbers = Array.from({ length: Math.ceil(maxSeats / 2) }, (_, i) => i * 2 + 1);
        
        return seatNumbers.map(i => {
            const leftSeat = seatingArrangement[i];
            const rightSeat = seatingArrangement[i + 1];
            
            // Only show seats that have students or if showing all students
            const shouldShowPair = selectedBatch === "All" || 
                (leftSeat && leftSeat.department === selectedBatch) ||
                (rightSeat && rightSeat.department === selectedBatch);

            if (shouldShowPair || selectedBatch === "All") {
                return (
                    <div key={`pair-${i}`} className="seat-pair">
                        <div className="seat">
                            <div className="seat-number">{i}</div>
                            {leftSeat && (selectedBatch === "All" || leftSeat.department === selectedBatch) && (
                                <div className="student">
                                    <div className="student-name">
                                        {leftSeat.name}
                                    </div>
                                    <div className="student-department">
                                        {leftSeat.department}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="seat">
                            <div className="seat-number">{i + 1}</div>
                            {rightSeat && (selectedBatch === "All" || rightSeat.department === selectedBatch) && (
                                <div className="student">
                                    <div className="student-name">
                                        {rightSeat.name}
                                    </div>
                                    <div className="student-department">
                                        {rightSeat.department}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            }
            return null;
        }).filter(Boolean); // Remove null values
    };

    const renderColumnHeaders = () => {
        const headers = [
            { left: "1", right: "2" },
            { left: "3", right: "4" },
            { left: "5", right: "6" },
            { left: "7", right: "8" }
        ];

        return headers.map((header, index) => (
            <div key={`header-${index}`} className="column-header-pair">
                <div className="column-header">{header.left}</div>
                <div className="column-header">{header.right}</div>
            </div>
        ));
    };

    return (
        
        <div className="classroom-container">
            <div className="header">
                <h1>Seating Plan - NBC</h1>
            </div>
            
            <div className="room-label">
                CR-{props.room}
            </div>
            
            <div className="controls">
                <button onClick={randomizeSeating}>
                    Randomize
                </button>
                <button disabled>
                    Previous Record
                </button>
                <select value={selectedBatch} onChange={handleBatchChange}>
                    <option value="All">All Batches</option>
                    <option value="CS-21">CS-21</option>
                    <option value="CS-22">CS-22</option>
                    <option value="CS-23">CS-23</option>
                    <option value="CS-24">CS-24</option>
                    <option value="CE-21">CE-21</option>
                    <option value="CE-22">CE-22</option>
                    <option value="CE-23">CE-23</option>
                    <option value="CE-24">CE-24</option>
                    <option value="AI-24">AI-24</option>
                </select>
            </div>
            
            <div className="seating-container">
                {renderColumnHeaders()}
                {renderSeatPairs()}
            </div>
            
            <button className="back-button" onClick={props.onBack}>
                Back to Classroom Selector
            </button>
        </div>
    );
}

export default ClassRoom;