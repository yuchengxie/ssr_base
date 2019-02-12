import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getTranslationList } from './store/actions';
import styles from './style.css'
import withStyle from '../../withStyle'

class Translation extends Component {

    getList() {
        const { list } = this.props;
        return list.map(item => <div key={item.id}>{item.title}</div>)
    }

    render() {
        return this.props.login ?
            (
                <div className={styles.container}>
                    {this.getList()}
                </div>
            ) : <Redirect to='/' />
    }

    componentDidMount() {
        if (! this.props.list.length) {
            this.props.getTList();
        }
    }
}

const mapStateToProps = state => ( {
    list: state.translation.translationsList,
    login: state.header.login
} );

const mapDispatchToProps = dispatch => ( {
    getTList() {
        dispatch(getTranslationList());
    }
} )

const ExportTranslation=connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation,styles));

ExportTranslation.loadData = (store) => {
    return store.dispatch(getTranslationList())
}

export default ExportTranslation
