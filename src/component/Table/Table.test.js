import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  const data = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Doe", age: 26 },
  ];

  test("renders table with correct headers", () => {
    render(<Table columns={columns} data={data} onRowClick={jest.fn()} />);

    // Check if column headers are rendered
    columns.forEach((col) => {
      expect(screen.getByText(col.label)).toBeInTheDocument();
    });
  });

  test("renders table rows with correct data", () => {
    render(<Table columns={columns} data={data} onRowClick={jest.fn()} />);

    // Check if row data is displayed
    data.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(row.age.toString())).toBeInTheDocument();
    });
  });

  test("calls onRowClick when a row is clicked", () => {
    const onRowClickMock = jest.fn();
    render(<Table columns={columns} data={data} onRowClick={onRowClickMock} />);

    // Get first row
    const firstRow = screen.getByText("John Doe").closest("tr");

    // Simulate click event
    fireEvent.click(firstRow);

    // Verify onRowClick is called with correct row data
    expect(onRowClickMock).toHaveBeenCalledTimes(1);
    expect(onRowClickMock).toHaveBeenCalledWith(data[0]);
  });
});
