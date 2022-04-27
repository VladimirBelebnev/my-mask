# my-mask ⚠️
👇 This mask can help check inputs for validity. You can simply copy the required code from the repository or save the desired file and use it. Happy using!

If you need to check the number for compliance with the Russian standard +7 (000) 000 00 00, then you need to specify the name attribute in the input and activate the function. **For several inputs at once!**

    <input type=text name=phone required>
    
    <script>
      phoneMask('[name="phone"]');
    </script>
    
If you need to check the data entered into the input for compliance only with Russian letters, then you need to add the name attribute and activate the function. **For several inputs at once!**
    
    <input type=text name=text required>
    
    <script>
      textMask('[name="text"]');
    </script>
    
If you need to validate the input only for numbers, then you need to add the name attribute and activate the function. **For one, specific input!**

    <input type=text name=number required>
    
    <script>
      onlyNumbers('[name="number"]');
    </script>
    
❗Besides name attributes, you can use classes or data-attribute.
    

