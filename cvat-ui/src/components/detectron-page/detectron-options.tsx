// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT
import React from 'react';
import { Select } from 'antd';

export interface OptionsListProps {
    currentTasksIndexes: number[];
    numberOfTasks: number;
    TaskName: string[];
}

const { Option } = Select;

export default function DetectronOptionsComponent(props: OptionsListProps) {
    const { currentTasksIndexes, TaskName, numberOfTasks } = props;

    const NoTasks = `Select a Task: ${numberOfTasks} Available Tasks`;

    return (
        <>
            <Select placeholder={NoTasks}>
                {currentTasksIndexes.map((id, index) => (
                    <Option key={index} value={id}>
                        {TaskName[index]}
                    </Option>
                ))}
            </Select>
        </>
    );
}
