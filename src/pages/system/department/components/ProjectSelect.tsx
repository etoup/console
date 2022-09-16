import { Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { OptionParams } from '../data.d'

const ProjectSelect: React.FC<{
    /** Value 和 onChange 会被自动注入 */
    value: string;
    project: OptionParams[];
    onChange?: (value: string) => void;
}> = (props) => {
    const { project } = props
    const [options, setOptions] = useState<OptionParams[]>([]);

    useEffect(() => {
        if (project) {
            setOptions(project);
        }
    }, []);

    return <Select allowClear placeholder='请选择项目' options={options} value={props.value} onChange={props.onChange} />;
};

export default ProjectSelect;