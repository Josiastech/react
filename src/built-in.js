import React from 'react';
import { render } from 'react-dom';

// React internal defines all the standard HTML tags 
// that we use on a daily basis. Think of them being 
// the same as any other react component. 
render(( 
  <div> 
    <button /> 
    <code /> 
    <input /> 
    <label /> 
    <p /> 
    <pre /> 
    <select /> 
    <table /> 
    <ul /> 
  </div> 
  ), 
  document.getElementById('app') 
); 