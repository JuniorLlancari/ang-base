# AngFormulario

ng g m shared
ng g c shared/sidemenu --skip-tests

ng g m template --routing  
ng g c template/basicos   --skip--tests -is
ng g c template/dinamicos --skip--tests -is
ng g c template/switches  --skip--tests -is

ng g m reactive --routing 
ng g c reactive/basicos   --skip--tests -is
ng g c reactive/dinamicos --skip--tests -is
ng g c reactive/switches  --skip--tests -is 

 ng g m auth  --routing 
 

 json-server --watch db.json --port 3232
https://www.npmjs.com/package/json-server
 ng g s shared/validator/emailValidator --skip-tests